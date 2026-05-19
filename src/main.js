import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const messages = { en, id }

const savedLocale = localStorage.getItem('locale') || (navigator.language && navigator.language.startsWith('id') ? 'id' : 'en')

const i18n = createI18n({
	legacy: false,
	locale: savedLocale,
	fallbackLocale: 'en',
	messages,
})

createApp(App).use(router).use(i18n).mount('#app')
