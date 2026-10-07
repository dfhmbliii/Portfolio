<template>
  <section class="section">
    <header class="section-head">
      <span class="section-tag">{{ $t('nav.about') }}</span>
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      <p class="section-intro">{{ $t('about.intro') }}</p>
    </header>

    <div class="about-grid">
      <div class="about-text">
        <p v-html="$t('about.p1')"></p>
        <p v-html="$t('about.p2')"></p>
        <p v-html="$t('about.p3')"></p>

        <blockquote class="highlight">
          {{ $t('about.conclusion') }}
        </blockquote>
      </div>

      <aside class="facts">
        <h3 class="facts-title">{{ $t('about.facts.title') }}</h3>
        <dl class="facts-list">
          <div v-for="fact in facts" :key="fact.labelKey" class="fact">
            <dt>{{ $t(fact.labelKey) }}</dt>
            <dd>{{ $t(fact.valueKey) }}</dd>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>

<script setup>
const facts = [
  { labelKey: 'about.facts.education', valueKey: 'about.facts.educationValue' },
  { labelKey: 'about.facts.gpa', valueKey: 'about.facts.gpaValue' },
  { labelKey: 'about.facts.role', valueKey: 'about.facts.roleValue' },
  { labelKey: 'about.facts.location', valueKey: 'about.facts.locationValue' },
  { labelKey: 'about.facts.focus', valueKey: 'about.facts.focusValue' },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 2rem;
  align-items: start;
}

.about-text p {
  line-height: 1.85;
  color: var(--text-muted);
  margin: 0 0 1rem;
}

.about-text :deep(strong) {
  color: var(--accent);
  font-weight: 600;
}

.highlight {
  margin: 1.5rem 0 0;
  padding: 1rem 1.2rem;
  border-left: 3px solid var(--accent-2);
  border-radius: 0 12px 12px 0;
  background: var(--surface-2);
  color: var(--text);
  line-height: 1.7;
  font-style: italic;
}

.facts {
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-radius: 18px;
  padding: 1.3rem 1.4rem;
}

.facts-title {
  margin: 0 0 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
}

.facts-list {
  margin: 0;
  display: grid;
  gap: 0.9rem;
}

.fact {
  display: grid;
  gap: 2px;
}

.fact dt {
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.fact dd {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-strong);
}

@media (max-width: 880px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
