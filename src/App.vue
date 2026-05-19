<template>
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="/">Muhammad Dafa Hambali</a>
      <nav class="nav">
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/about">{{ $t('nav.about') }}</router-link>
        <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
        <router-link to="/experience">{{ $t('nav.experience') }}</router-link>
        <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
      </nav>
      <div class="lang-switcher" role="navigation" aria-label="Language selector">
        <div class="lang-toggle" role="tablist" aria-label="Languages">
          <button
            class="lang-btn"
            :class="{ active: currentLocale === 'id' }"
            @click="currentLocale = 'id'"
            :aria-pressed="currentLocale === 'id'"
          >
            ID
          </button>
          <button
            class="lang-btn"
            :class="{ active: currentLocale === 'en' }"
            @click="currentLocale = 'en'"
            :aria-pressed="currentLocale === 'en'"
          >
            EN
          </button>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

watch(currentLocale, (val) => {
  locale.value = val
  try { localStorage.setItem('locale', val) } catch (e) {}
})
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
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  color: rgba(229, 238, 251, 0.95);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease, color 0.12s ease;
}
.lang-btn:hover { transform: translateY(-1px); background: rgba(255,255,255,0.02); }
.lang-btn.active {
  background: linear-gradient(135deg, #4ea3ff, #29d6b0);
  color: #07111f;
  border-color: transparent;
  box-shadow: 0 8px 26px rgba(46,145,255,0.16);
}
@media (max-width: 820px) {
  .lang-switcher { margin-top: 8px; }
}
</style>

