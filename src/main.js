import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//i18n
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import es from '../locales/es.json'

//firebase
import { firebaseApp } from './config/firebaseConfig'
import { VueFire, VueFireAuth } from 'vuefire'


const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueFire, {
  firebaseApp,
})
app.mount('#app')
