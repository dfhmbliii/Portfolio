<template>
  <div class="page-shell">
    <header class="topbar" :class="{ scrolled: isScrolled }">
      <a class="brand" href="#home">
        <span class="brand-full">Muhammad Dafa Hambali</span>
        <span class="brand-short">Dafa Hambali</span>
      </a>

      <nav id="site-nav" class="nav" :class="{ open: menuOpen }" aria-label="Section navigation">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click="menuOpen = false"
        >{{ $t(item.labelKey) }}</a>
      </nav>

      <div class="topbar-tools">
        <div class="lang-switcher" role="group" aria-label="Language selector">
          <button
            class="chip-btn"
            :class="{ active: currentLocale === 'id' }"
            @click="setLocale('id')"
            :aria-pressed="currentLocale === 'id'"
            title="Bahasa Indonesia"
          >
            <span class="flag" aria-hidden="true">
              <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
                <rect width="3" height="1" y="0" fill="#d21f3c" />
                <rect width="3" height="1" y="1" fill="#ffffff" />
              </svg>
            </span>
            ID
          </button>
          <button
            class="chip-btn"
            :class="{ active: currentLocale === 'en' }"
            @click="setLocale('en')"
            :aria-pressed="currentLocale === 'en'"
            title="English"
          >
            <span class="flag" aria-hidden="true">
              <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="30" fill="#012169" />
                <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6" />
                <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="4" />
                <path d="M30 0 L30 30" stroke="#fff" stroke-width="10" />
                <path d="M0 15 L60 15" stroke="#fff" stroke-width="10" />
                <path d="M30 0 L30 30" stroke="#C8102E" stroke-width="6" />
                <path d="M0 15 L60 15" stroke="#C8102E" stroke-width="6" />
              </svg>
            </span>
            EN
          </button>
        </div>

        <button
          class="theme-toggle"
          @click="toggleTheme"
          :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- sun: shown in dark mode (click = go light) -->
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <!-- moon: shown in light mode -->
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>

        <button
          class="hamburger"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          aria-label="Toggle navigation"
        >
          <svg v-if="!menuOpen" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>

    <main>
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>

    <footer class="site-footer">
      <span>© {{ year }} Muhammad Dafa Hambali</span>
      <span>Vue 3 · Vite · Deployed on Vercel</span>
      <a class="back-top" href="#home">Back to top ↑</a>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Skills from './pages/Skills.vue'
import Experience from './pages/Experience.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

const { locale } = useI18n()
const currentLocale = ref(locale.value)
const year = new Date().getFullYear()
const menuOpen = ref(false)

const navItems = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'contact', labelKey: 'nav.contact' },
]

/* ---------- theme ---------- */
const theme = ref(document.documentElement.getAttribute('data-theme') || 'dark')

function toggleTheme () {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  try { localStorage.setItem('theme', theme.value) } catch (e) {}
}

/* ---------- language ---------- */
function setLocale (loc) {
  if (currentLocale.value === loc) return
  currentLocale.value = loc
  locale.value = loc
  try { localStorage.setItem('locale', loc) } catch (e) {}
}

/* ---------- scroll spy + header shadow ---------- */
const activeSection = ref('home')
const isScrolled = ref(false)
let observer = null

function onScroll () {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  const sections = navItems
    .map((n) => document.getElementById(n.id))
    .filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) activeSection.value = visible[0].target.id
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
  )

  sections.forEach((s) => observer.observe(s))
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.brand {
  font-size: 1.02rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  white-space: nowrap;
  color: var(--text-strong);
}

.brand-short {
  display: none;
}

@media (max-width: 720px) {
  .brand-full { display: none; }
  .brand-short { display: inline; }
}

.topbar-tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-switcher {
  display: flex;
  gap: 4px;
}

.chip-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease, color 0.12s ease;
}

.chip-btn:hover {
  transform: translateY(-1px);
  background: var(--surface-2);
}

.chip-btn.active {
  background: var(--gradient);
  color: var(--accent-contrast);
  border-color: transparent;
}

.flag {
  display: inline-block;
  line-height: 0;
}

.flag svg {
  width: 17px;
  height: 12px;
  display: block;
  border-radius: 2px;
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease;
}

.theme-toggle:hover {
  transform: rotate(-15deg) translateY(-1px);
  background: var(--surface-3);
}

.hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--border-soft);
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
}

@media (max-width: 980px) {
  .hamburger {
    display: inline-flex;
  }
}

@media (max-width: 640px) {
  .topbar-tools {
    gap: 6px;
  }

  .chip-btn {
    padding: 5px 8px;
    font-size: 0.72rem;
  }
}
</style>
