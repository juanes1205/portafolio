import crypto from "node:crypto";
import admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        }),
    });
}

const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed",
        });
    }

    try {
        // Obtener IP del visitante
        const forwardedFor = req.headers["x-forwarded-for"];

        const ip = forwardedFor
            ? forwardedFor.split(",")[0].trim()
            : req.socket?.remoteAddress || "unknown";

        // Crear hash de la IP
        const ipHash = crypto
            .createHash("sha256")
            .update(`${ip}-${process.env.IP_HASH_SECRET}`)
            .digest("hex");

        const visitorRef = db
            .collection("visitantes")
            .doc(ipHash);

        const visitorSnap = await visitorRef.get();

        const now = admin.firestore.Timestamp.now();

        const statsRef = db
            .collection("estadisticas")
            .doc("visitas");

        // ==========================================
        // VISITANTE NUEVO
        // ==========================================

        if (!visitorSnap.exists) {
            await visitorRef.set({
                primeraVisita: now,
                ultimaVisita: now,
                visitas: 1,
            });

            await statsRef.set(
                {
                    total: admin.firestore.FieldValue.increment(1),
                    ultimaVisita: now,
                },
                {
                    merge: true,
                }
            );

            const updatedStatsSnap = await statsRef.get();

            const total =
                updatedStatsSnap.data()?.total || 1;

            return res.status(200).json({
                success: true,
                unique: true,
                total,
            });
        }

        // ==========================================
        // VISITANTE EXISTENTE
        // ==========================================

        await visitorRef.update({
            ultimaVisita: now,
            visitas: admin.firestore.FieldValue.increment(1),
        });

        const statsSnap = await statsRef.get();

        const total = statsSnap.exists
            ? statsSnap.data().total || 0
            : 0;

        return res.status(200).json({
            success: true,
            unique: false,
            total,
        });
    } catch (error) {
        console.error("Error registrando visita:", error);

        return res.status(500).json({
            error: "Internal server error",
        });
    }
}