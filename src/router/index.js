import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import Experience from '../pages/Experience.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
