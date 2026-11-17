<template>
  <div ref="root" class="cv-picker">
    <button
      class="btn trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="true"
      @click="toggle"
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

    <!-- Menu di-teleport ke <body> supaya tidak terjebak di dalam stacking
         context section mana pun (elemen dengan transform/filter membuat
         konteks sendiri, dan section berikutnya bisa menimpa menu ini).
         Tanpa <transition>: transisi leave kadang menyisakan node yatim
         sehingga handler di dalam menu tidak bisa diklik. Animasi dibuat
         lewat CSS animation pada saat mount. -->
    <Teleport to="body">
      <div
        v-if="open"
        :key="lang"
        :data-lang="lang"
        ref="menuEl"
        class="cv-menu"
        :style="menuStyle"
      >
        <div class="cv-menu-head">
          <span class="cv-menu-label">{{ $t('cv.language') }}</span>
          <div class="cv-lang" role="group" :aria-label="$t('cv.language')">
            <button
              type="button"
              :class="{ active: lang === 'id' }"
              :aria-pressed="lang === 'id'"
              @click="setLang('id')"
            >ID</button>
            <button
              type="button"
              :class="{ active: lang === 'en' }"
              :aria-pressed="lang === 'en'"
              @click="setLang('en')"
            >EN</button>
          </div>
        </div>

        <ul class="cv-list">
          <li v-for="cv in cvs" :key="cv.file">
            <a :href="cv.file" download @click="close">
              <span class="cv-title">{{ $t(cv.titleKey) }}</span>
              <span class="cv-desc">{{ $t(cv.descKey) }}</span>
              <span class="cv-ext" aria-hidden="true">{{ lang.toUpperCase() }} ↓</span>
            </a>
          </li>
        </ul>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// PENTING: ambil dari scope GLOBAL. scope lokal punya ref locale sendiri
// sehingga tidak ikut berubah saat bahasa website diganti.
const { locale } = useI18n({ useScope: 'global' })

// App meneruskan locale sebagai prop (sumber reaktif yang pasti),
// dipakai lebih dulu sebelum fallback ke locale global.
const props = defineProps({ locale: { type: String, default: '' } })

const activeLocale = computed(() => props.locale || locale.value || 'en')

const root = ref(null)
const menuEl = ref(null)
const open = ref(false)
// Posisi menu dihitung dari rect tombol (position: fixed di <body>),
// karena menu tidak lagi punya ancestor yang bisa memotong/menimpanya.
const menuStyle = ref({})
// null = ikuti bahasa website; ID/EN = pilihan manual untuk sekali download
const langOverride = ref(null)

const lang = computed(() => {
  if (langOverride.value) return langOverride.value
  return activeLocale.value === 'en' ? 'en' : 'id'
})

const base = [
  {
    slug: 'cv-system-analyst',
    titleKey: 'cv.options.analyst.title',
    descKey: 'cv.options.analyst.desc',
  },
  {
    slug: 'cv-fullstack-web-dev',
    titleKey: 'cv.options.fullstack.title',
    descKey: 'cv.options.fullstack.desc',
  },
  {
    slug: 'cv-it-support-qa',
    titleKey: 'cv.options.itqa.title',
    descKey: 'cv.options.itqa.desc',
  },
]

const cvs = computed(() =>
  base.map((cv) => ({
    ...cv,
    file: `/cv/${cv.slug}${lang.value === 'en' ? '-en' : ''}.pdf`,
  }))
)

function setLang (l) {
  langOverride.value = l
}

function close () {
  open.value = false
}

function toggle () {
  open.value = !open.value
  if (open.value) place()
  else menuStyle.value = {}
}

// Perkiraan tinggi menu (head + 3 item + padding). Dipakai untuk memutuskan
// buka ke atas atau ke bawah SEBELUM menu dirender, sehingga posisinya sudah
// benar pada frame pertama dan tidak bergantung pada pengukuran ulang.
const MENU_HEIGHT = 300

function isMobile () {
  return document.documentElement.clientWidth <= 520
}

/** Posisi dihitung sepenuhnya dari rect tombol (position: fixed di <body>). */
function place () {
  if (!root.value) return

  const t = root.value.getBoundingClientRect()
  const vw = document.documentElement.clientWidth
  const vh = document.documentElement.clientHeight

  // tombol sudah keluar layar (mis. halaman di-scroll jauh) -> tutup menu,
  // supaya tidak ada menu menggantung tanpa tombol pembukanya
  if (t.bottom < 8 || t.top > vh - 8) {
    open.value = false
    menuStyle.value = {}
    return
  }

  const gap = 10
  const edge = 8
  const width = Math.min(370, vw - 16)

  const spaceBelow = vh - t.bottom - gap - edge
  const spaceAbove = t.top - gap - edge
  // buka ke atas bila ruang di bawah tidak cukup dan ruang di atas lebih lega
  const openUp = spaceBelow < MENU_HEIGHT && spaceAbove > spaceBelow

  const style = {
    position: 'fixed',
    maxWidth: width + 'px',
    top: 'auto',
    bottom: 'auto',
  }

  if (isMobile()) {
    // di HP picker full-width, jadi menu cukup selebar picker
    style.left = edge + 'px'
    style.right = edge + 'px'
    style.width = 'auto'
    style.maxWidth = 'none'
  } else {
    // jaga agar tidak keluar tepi kanan viewport
    style.left = Math.max(edge, Math.min(t.left, vw - width - edge)) + 'px'
  }

  if (openUp) {
    style.bottom = Math.round(vh - t.top + gap) + 'px'
  } else {
    style.top = Math.round(t.bottom + gap) + 'px'
  }

  menuStyle.value = style
}

// Kalau bahasa CV berubah (oleh ganti bahasa website ATAU tombol ID/EN),
// tutup menu supaya tidak pernah menampilkan file versi yang salah.
watch(lang, () => {
  open.value = false
})

function onDocClick (e) {
  if (root.value && root.value.contains(e.target)) return
  // menu di-teleport ke <body>, jadi dicek terpisah dari root
  if (menuEl.value && menuEl.value.contains(e.target)) return
  open.value = false
}

function onKeydown (e) {
  if (e.key === 'Escape') open.value = false
}

function onViewportChange () {
  if (open.value) place()
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
  // capture: true supaya scroll pada container mana pun ikut menyesuaikan posisi
  window.addEventListener('scroll', onViewportChange, true)
  window.addEventListener('resize', onViewportChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onViewportChange, true)
  window.removeEventListener('resize', onViewportChange)
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

/* posisi sebenarnya selalu diisi lewat :style (fixed terhadap viewport);
   nilai di bawah ini hanya fallback bila script belum sempat menghitung. */
.cv-menu {
  position: fixed;
  top: calc(100% + 10px);
  left: 0;
  z-index: 120;
  min-width: 300px;
  max-width: min(88vw, 370px);
  /* jaring pengaman: menu tidak pernah melewati tepi viewport,
     isi yang kepanjangan jadi bisa di-scroll di dalam menu */
  max-height: calc(100vh - 24px);
  overflow-y: auto;
  padding: 8px;
  background: var(--surface-solid);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
  animation: cv-in 0.16s ease both;
  transform-origin: top left;
}

@keyframes cv-in {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* header: pemilih bahasa CV */
.cv-menu-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 4px 6px 10px;
  margin-bottom: 4px;
  border-bottom: 1px solid var(--border-soft);
}

.cv-menu-label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.cv-lang {
  display: inline-flex;
  gap: 2px;
  padding: 2px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
}

.cv-lang button {
  padding: 3px 11px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.16s ease, color 0.16s ease;
}

.cv-lang button.active {
  background: var(--accent);
  color: var(--accent-contrast);
}

.cv-list {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
}

.cv-list li + li {
  margin-top: 4px;
}

.cv-list a {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2px 10px;
  padding: 11px 12px;
  border-radius: 11px;
  transition: background 0.18s ease;
}

.cv-list a:hover,
.cv-list a:focus-visible {
  background: var(--accent-soft);
  outline: 2px solid var(--accent);
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
</style>
