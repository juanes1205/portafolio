<script setup>
import { ref } from "vue";
import { db } from "@/config/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

const { t } = useI18n();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const handleSubmit = async () => {
  if (!name.value || !email.value || !subject.value || !message.value) return;

  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    const messagesRef = collection(db, "mensajes");
    await addDoc(messagesRef, {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      createdAt: serverTimestamp(),
    });

    showSuccess.value = true;
    // Reset form
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    console.error("Error saving message: ", error);
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="w-full max-w-2xl mx-auto mt-4">
    <!-- Form Card -->
    <div class="card bg-neutral/10 backdrop-blur-md border border-neutral-content/10 shadow-xl p-6 md:p-8 rounded-2xl">
      
      <!-- Direct Contact Links -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="mailto:esteban.restrepo.11@gmail.com"
          class="btn btn-sm btn-ghost hover:bg-primary/20 rounded-lg flex items-center gap-2"
        >
          <Icon icon="mdi:email" class="w-4 h-4 text-blue-500" />
          esteban.restrepo.11@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/juan-esteban-restrepo-978a8b7b"
          target="_blank"
          class="btn btn-sm btn-ghost hover:bg-secondary/20 rounded-lg flex items-center gap-2"
        >
          <Icon icon="uil:linkedin" class="w-4 h-4 text-blue-500" />
          LinkedIn
        </a>
      </div>

      <!-- Success / Error Alerts -->
      <transition name="fade">
        <div v-if="showSuccess" class="alert alert-success rounded-xl mb-6 flex items-start gap-2">
          <Icon icon="mdi:check-circle" class="w-6 h-6 flex-shrink-0" />
          <span>{{ t("contact.form.success") }}</span>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="showError" class="alert alert-error rounded-xl mb-6 flex items-start gap-2">
          <Icon icon="mdi:alert-circle" class="w-6 h-6 flex-shrink-0" />
          <span>{{ t("contact.form.error") }}</span>
        </div>
      </transition>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text font-semibold">{{ t("contact.form.name") }}</span>
          </label>
          <input
            v-model="name"
            type="text"
            required
            :placeholder="t('contact.form.namePlaceholder')"
            class="input input-bordered w-full rounded-lg bg-base-100/50 focus:border-primary focus:ring-1 focus:ring-primary"
            :disabled="isSubmitting"
          />
        </div>

        <!-- Email -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text font-semibold">{{ t("contact.form.email") }}</span>
          </label>
          <input
            v-model="email"
            type="email"
            required
            :placeholder="t('contact.form.emailPlaceholder')"
            class="input input-bordered w-full rounded-lg bg-base-100/50 focus:border-primary focus:ring-1 focus:ring-primary"
            :disabled="isSubmitting"
          />
        </div>

        <!-- Subject -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text font-semibold">{{ t("contact.form.subject") }}</span>
          </label>
          <input
            v-model="subject"
            type="text"
            required
            :placeholder="t('contact.form.subjectPlaceholder')"
            class="input input-bordered w-full rounded-lg bg-base-100/50 focus:border-primary focus:ring-1 focus:ring-primary"
            :disabled="isSubmitting"
          />
        </div>

        <!-- Message -->
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text font-semibold">{{ t("contact.form.message") }}</span>
          </label>
          <textarea
            v-model="message"
            required
            :placeholder="t('contact.form.messagePlaceholder')"
            class="textarea textarea-bordered h-32 rounded-lg bg-base-100/50 focus:border-primary focus:ring-1 focus:ring-primary"
            :disabled="isSubmitting"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="form-control w-full pt-4">
          <button
            type="submit"
            :disabled="isSubmitting || !name || !email || !subject || !message"
            class="btn btn-primary w-full rounded-lg font-bold transition-all duration-300 hover:scale-[1.01]"
          >
            <span v-if="isSubmitting" class="loading loading-spinner"></span>
            <Icon v-else icon="mdi:send" class="w-5 h-5" />
            {{ t("contact.form.submit") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
