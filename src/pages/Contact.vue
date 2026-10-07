<template>
  <section class="section">
    <header class="section-head">
      <span class="section-tag">{{ $t('nav.contact') }}</span>
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p class="section-intro">{{ $t('contact.intro') }}</p>
    </header>

    <div class="contact-grid">
      <div class="contact-card">
        <div class="card-icon" aria-hidden="true">✉️</div>
        <h3 class="card-title">{{ $t('contact.cards.email') }}</h3>
        <p class="card-value">dfhmbli09@gmail.com</p>
        <div class="card-actions">
          <a class="card-link" href="mailto:dfhmbli09@gmail.com">{{ $t('contact.cards.email_action') }}</a>
          <button class="copy-btn" type="button" @click="copyEmail">
            <span v-if="!copied">{{ $t('contact.copy') }}</span>
            <span v-else class="copied">{{ $t('contact.copied') }}</span>
          </button>
        </div>
      </div>

      <component
        :is="card.href ? 'a' : 'div'"
        v-for="card in linkCards"
        :key="card.key"
        class="contact-card"
        :href="card.href || undefined"
        :target="card.external ? '_blank' : undefined"
        :rel="card.external ? 'noopener noreferrer' : undefined"
      >
        <div class="card-icon" aria-hidden="true">{{ card.icon }}</div>
        <h3 class="card-title">{{ $t(`contact.cards.${card.key}`) }}</h3>
        <p class="card-value">{{ card.value }}</p>
        <span v-if="card.href" class="card-link">{{ $t(`contact.cards.${card.key}_action`) }}</span>
        <span v-else class="card-note">{{ $t(`contact.cards.${card.key}_action`) }}</span>
      </component>
    </div>

    <div class="cta-section">
      <h3 class="cta-heading">{{ $t('contact.cta.heading') }}</h3>
      <p class="cta-text">{{ $t('contact.cta.text') }}</p>
      <div class="cta-actions">
        <a href="mailto:dfhmbli09@gmail.com" class="btn primary">{{ $t('contact.cta.button') }}</a>
        <a
          class="btn"
          href="/CV_Muhammad_Dafa_Hambali.pdf"
          target="_blank"
          rel="noopener"
        >{{ $t('home.actions.downloadCV') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const EMAIL = 'dfhmbli09@gmail.com'
const copied = ref(false)
let timer = null

async function copyEmail () {
  try {
    await navigator.clipboard.writeText(EMAIL)
  } catch (e) {
    // Fallback untuk browser lama / konteks tanpa clipboard API
    const el = document.createElement('textarea')
    el.value = EMAIL
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { copied.value = false }, 1800)
}

const linkCards = [
  { key: 'location', icon: '📍', value: 'Makassar, Sulawesi Selatan', href: null, external: false },
  { key: 'linkedin', icon: '💼', value: 'muhammad-dafa-hambali', href: 'https://www.linkedin.com/in/muhammad-dafa-hambali', external: true },
  { key: 'github', icon: '💻', value: 'github.com', href: 'https://github.com', external: true },
  { key: 'instagram', icon: '📸', value: '@dafahambali', href: 'https://www.instagram.com/dafahambali', external: true },
  { key: 'whatsapp', icon: '💬', value: '+62 852-5435-7690', href: 'https://wa.me/6285254357690', external: true },
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.contact-card {
  display: flex;
  flex-direction: column;
  padding: 1.3rem 1.4rem;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

a.contact-card:hover {
  transform: translateY(-4px);
  background: var(--surface-3);
  border-color: var(--accent);
}

.card-icon {
  font-size: 1.7rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.card-title {
  margin: 0 0 0.4rem;
  color: var(--text-strong);
  font-size: 1.02rem;
  font-weight: 600;
}

.card-value {
  margin: 0 0 0.8rem;
  flex-grow: 1;
  font-size: 0.92rem;
  color: var(--accent);
  font-weight: 600;
  word-break: break-word;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.copy-btn {
  padding: 5px 11px;  border-radius: 999px;
  border: 1px solid var(--border-soft);
  background: var(--surface-3);
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.18s ease, border-color 0.18s ease;
}

.copy-btn:hover {
  color: var(--text-strong);
  border-color: var(--accent);
}

.copy-btn .copied {
  color: var(--accent-2);
}

.card-note {
  font-size: 0.8rem;
  color: var(--text-faint);
}

/* CTA */
.cta-section {
  margin-top: 1.4rem;
  padding: 2.2rem 1.6rem;
  text-align: center;
  border-radius: 18px;
  background:
    radial-gradient(circle at top center, var(--glow-1), transparent 60%),
    var(--surface-2);
  border: 1px solid var(--border);
}

.cta-heading {
  margin: 0 0 0.6rem;
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  color: var(--text-strong);
}

.cta-text {
  margin: 0 auto 1.5rem;
  max-width: 56ch;
  color: var(--text-muted);
  line-height: 1.65;
}

.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 520px) {
  .cta-actions .btn {
    width: 100%;
  }
}
</style>
