<template>
  <div ref="root" class="cv-picker">
    <button
      class="btn trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="true"
      @click="open = !open"
    >
      {{ $t('home.actions.downloadCV') }}
      <svg
        class="caret"
        :class="{ up: open }"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <transition name="cv-drop">
      <ul v-if="open" class="cv-menu">
        <li v-for="cv in cvs" :key="cv.file">
          <a :href="cv.file" download @click="open = false">
            <span class="cv-title">{{ $t(cv.titleKey) }}</span>
            <span class="cv-desc">{{ $t(cv.descKey) }}</span>
            <span class="cv-ext" aria-hidden="true">PDF ↓</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const root = ref(null)
const open = ref(false)

const cvs = [
  {
    file: '/cv/cv-system-analyst.pdf',
    titleKey: 'cv.options.analyst.title',
    descKey: 'cv.options.analyst.desc',
  },
  {
    file: '/cv/cv-fullstack-web-dev.pdf',
    titleKey: 'cv.options.fullstack.title',
    descKey: 'cv.options.fullstack.desc',
  },
  {
    file: '/cv/cv-it-support-qa.pdf',
    titleKey: 'cv.options.itqa.title',
    descKey: 'cv.options.itqa.desc',
  },
]

function onDocClick (e) {
  if (root.value && !root.value.contains(e.target)) open.value = false
}

function onKeydown (e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.cv-picker {
  position: relative;
  display: inline-flex;
}

.trigger {
  gap: 0.45rem;
}

.caret {
  transition: transform 0.2s ease;
}

.caret.up {
  transform: rotate(180deg);
}

.cv-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 60;
  min-width: 290px;
  max-width: min(88vw, 360px);
  margin: 0;
  padding: 8px;
  list-style: none;
  text-align: left;
  background: var(--surface-solid);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.cv-menu li + li {
  margin-top: 4px;
}

.cv-menu a {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2px 10px;
  padding: 11px 12px;
  border-radius: 11px;
  transition: background 0.18s ease;
}

.cv-menu a:hover,
.cv-menu a:focus-visible {
  background: var(--accent-soft);
  outline: none;
}

.cv-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-strong);
  line-height: 1.35;
}

.cv-desc {
  font-size: 0.79rem;
  color: var(--text-muted);
  line-height: 1.45;
}

.cv-ext {
  grid-row: 1 / span 2;
  align-self: center;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--accent);
  white-space: nowrap;
}

.cv-drop-enter-active,
.cv-drop-leave-active {
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.cv-drop-enter-from,
.cv-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 520px) {
  .cv-picker {
    width: 100%;
  }

  .cv-picker .trigger {
    width: 100%;
  }

  .cv-menu {
    left: 50%;
    transform: translateX(-50%);
    min-width: 0;
    width: 100%;
  }

  .cv-drop-enter-from,
  .cv-drop-leave-to {
    transform: translateX(-50%) translateY(-6px);
  }
}
</style>
