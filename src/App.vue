<template>
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="/">Muhammad Dafa Hambali</a>
      <button class="hamburger" @click="toggleMenu" :aria-expanded="mobileOpen" aria-label="Toggle navigation">
        <svg v-if="!mobileOpen" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <nav class="nav">
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
        <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
        <router-link to="/experience">{{ $t('nav.experience') }}</router-link>
        <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
      </nav>

      <div class="mobile-nav" v-if="mobileOpen" role="dialog" aria-label="Mobile navigation">
        <router-link @click.native="closeMenu" to="/">{{ $t('nav.home') }}</router-link>
        <router-link @click.native="closeMenu" to="/about">{{ $t('nav.about') }}</router-link>
        <router-link @click.native="closeMenu" to="/projects">{{ $t('nav.projects') }}</router-link>
        <router-link @click.native="closeMenu" to="/experience">{{ $t('nav.experience') }}</router-link>
        <router-link @click.native="closeMenu" to="/contact">{{ $t('nav.contact') }}</router-link>
      </div>
      <div class="selected-flag" aria-hidden="true">
        <svg v-if="currentLocale === 'id'" viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indonesia flag">
          <rect width="3" height="1" y="0" fill="#d21f3c" />
          <rect width="3" height="1" y="1" fill="#ffffff" />
        </svg>
        <svg v-else viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="United Kingdom flag">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="4"/>
          <path d="M30 0 L30 30" stroke="#fff" stroke-width="10"/>
          <path d="M0 15 L60 15" stroke="#fff" stroke-width="10"/>
          <path d="M30 0 L30 30" stroke="#C8102E" stroke-width="6"/>
          <path d="M0 15 L60 15" stroke="#C8102E" stroke-width="6"/>
        </svg>
      </div>
      <div class="lang-switcher" role="navigation" aria-label="Language selector">
        <div class="lang-toggle" role="tablist" aria-label="Languages">
          <button
            class="lang-btn"
            :class="{ active: currentLocale === 'id' }"
            @click="setLocale('id')"
            :aria-pressed="currentLocale === 'id'"
            title="Bahasa Indonesia"
          >
            <span class="flag flag-id" :class="{ flipping: flip.id }" aria-hidden="true">
              <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Indonesia flag">
                <rect width="3" height="1" y="0" fill="#d21f3c" />
                <rect width="3" height="1" y="1" fill="#ffffff" />
              </svg>
            </span>
            <span class="lang-label">ID</span>
          </button>
          <button
            class="lang-btn"
            :class="{ active: currentLocale === 'en' }"
            @click="setLocale('en')"
            :aria-pressed="currentLocale === 'en'"
            title="English"
          >
            <span class="flag flag-en" :class="{ flipping: flip.en }" aria-hidden="true">
              <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="United Kingdom flag">
                <rect width="60" height="30" fill="#012169"/>
                <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
                <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="4"/>
                <path d="M30 0 L30 30" stroke="#fff" stroke-width="10"/>
                <path d="M0 15 L60 15" stroke="#fff" stroke-width="10"/>
                <path d="M30 0 L30 30" stroke="#C8102E" stroke-width="6"/>
                <path d="M0 15 L60 15" stroke="#C8102E" stroke-width="6"/>
              </svg>
            </span>
            <span class="lang-label">EN</span>
          </button>
        </div>
      </div>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="locale-fade" mode="out-in">
          <component :is="Component" :key="currentLocale" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)
const mobileOpen = ref(false)

const flip = reactive({ id: false, en: false })

function setLocale (loc) {
  // trigger flip animation for the clicked flag
  if (flip[loc]) {
    // already flipping; restart
    flip[loc] = false
    setTimeout(() => (flip[loc] = true), 10)
  } else {
    flip[loc] = true
  }

  // stop flip after animation
  setTimeout(() => { flip[loc] = false }, 420)

  currentLocale.value = loc
}

function toggleMenu () {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu () {
  mobileOpen.value = false
}

watch(currentLocale, (val) => {
  locale.value = val
  try { localStorage.setItem('locale', val) } catch (e) {}
})

// close mobile menu when route changes or locale changes
watch(() => mobileOpen.value, (open) => {})
</script>

<style scoped>
.lang-switcher {
  margin-left: 12px;
}
.lang-toggle {
  display: flex;
  gap: 6px;
  align-items: center;
}
.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  color: rgba(229, 238, 251, 0.95);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease, color 0.12s ease;
}
.lang-btn .flag { font-size: 1.05rem; line-height: 1; display: inline-block; transform-style: preserve-3d; backface-visibility: hidden; }
.lang-btn .lang-label { font-size: 0.85rem }
.lang-btn:hover { transform: translateY(-1px); background: rgba(255,255,255,0.02); }
.lang-btn.active {
  background: linear-gradient(135deg, #4ea3ff, #29d6b0);
  color: #07111f;
  border-color: transparent;
  box-shadow: 0 8px 26px rgba(46,145,255,0.16);
}

/* flag flip */
.flag.flipping { animation: flag-flip 420ms ease; }
.flag svg { width: 20px; height: 14px; display: block }
.selected-flag svg { width: 20px; height: 14px; display: block }
@keyframes flag-flip {
  0% { transform: rotateY(0deg); }
  40% { transform: rotateY(160deg); }
  100% { transform: rotateY(360deg); }
}

/* Locale switch animation */
.locale-fade-enter-active, .locale-fade-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.locale-fade-enter-from, .locale-fade-leave-to {
  opacity: 0; transform: translateY(6px);
}
.locale-fade-enter-to, .locale-fade-leave-from {
  opacity: 1; transform: translateY(0);
}

@media (max-width: 820px) {
  .lang-switcher { margin-top: 8px; }
}

/* Mobile nav and hamburger */
.hamburger {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 8px;
  border-radius: 8px;
  color: rgba(229,238,251,0.9);
}
.mobile-nav {
  display: none;
}

@media (max-width: 480px) {
  .nav { display: none; }
  .hamburger { display: inline-flex; align-items: center; justify-content: center; }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    padding: 12px;
    width: 100%;
    background: rgba(10,20,32,0.5);
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.04);
  }
  .mobile-nav a { padding: 8px 10px; border-radius: 8px; background: rgba(255,255,255,0.02); }
}

.selected-flag {
  margin-left: 12px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
}
</style>

