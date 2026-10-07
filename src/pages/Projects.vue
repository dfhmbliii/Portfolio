<template>
  <section class="section">
    <header class="section-head">
      <span class="section-tag">{{ $t('nav.projects') }}</span>
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <p class="section-intro">{{ $t('projects.intro') }}</p>
    </header>

    <div class="projects-list">
      <article
        v-for="(project, index) in projects"
        :key="project.id"
        :id="project.id"
        class="project-card"
        :class="{ flip: index % 2 === 1, 'no-media': !project.image }"
      >
        <a
          v-if="project.image"
          class="project-image-link"
          :href="project.image"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="project.image" :alt="$t(project.titleKey)" class="project-image" />
        </a>

        <div class="project-body">
          <div class="project-heading">
            <span class="project-icon" aria-hidden="true">{{ project.icon }}</span>
            <div>
              <h3 class="project-title">{{ $t(project.titleKey) }}</h3>
              <span class="badge">{{ $t(project.badgeKey) }}</span>
            </div>
          </div>

          <p class="subtitle">{{ $t(project.subtitleKey) }}</p>

          <ul class="project-points">
            <li v-for="item in project.points" :key="item.labelKey + (item.valueKey || '')">
              <strong>{{ $t(`projects.labels.${item.labelKey}`) }}</strong
              >: {{ item.valueKey ? $t(item.valueKey) : item.value }}
            </li>
          </ul>

          <div v-if="project.deliverables" class="block">
            <h4 class="block-title">{{ $t('projects.deliverables.title') }}</h4>
            <ul class="deliverables-list">
              <li v-for="item in project.deliverables" :key="item.key">{{ $t(item.key) }}</li>
            </ul>
          </div>

          <div v-if="project.testCases" class="block">
            <h4 class="block-title">{{ $t('projects.testing.title') }}</h4>
            <p class="block-intro">{{ $t('projects.testing.intro') }}</p>

            <div v-for="testCase in project.testCases" :key="testCase.id" class="testing-card">
              <div class="testing-header">
                <div>
                  <span class="testing-id">{{ testCase.id }}</span>
                  <h5 class="testing-title">{{ $t(testCase.titleKey) }}</h5>
                </div>
                <div class="testing-badges">
                  <span class="testing-badge" :class="testCase.typeClass">{{ $t(testCase.typeKey) }}</span>
                  <span class="testing-status" :class="testCase.statusClass">{{ $t(testCase.statusKey) }}</span>
                </div>
              </div>

              <p class="testing-line">
                <strong>{{ $t('projects.testing.scenario') }}</strong>
                {{ $t(testCase.scenarioKey) }}
              </p>

              <div class="testing-steps">
                <strong>{{ $t('projects.testing.steps') }}</strong>
                <ol>
                  <li v-for="stepKey in testCase.stepKeys" :key="stepKey">{{ $t(stepKey) }}</li>
                </ol>
              </div>

              <p class="testing-line">
                <strong>{{ $t('projects.testing.expectedResult') }}</strong>
                {{ $t(testCase.expectedKey) }}
              </p>
            </div>
          </div>

          <div class="project-links" v-if="project.certLinks">
            <a
              v-for="cert in project.certLinks"
              :key="cert.labelKey || cert.label"
              class="card-link"
              :href="cert.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ cert.labelKey ? $t(cert.labelKey) : cert.label }}
            </a>
          </div>

          <a
            v-else-if="project.link"
            class="card-link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('projects.viewDetails') }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 'project-amira',
    icon: '📦',
    titleKey: 'projects.items.project-amira.title',
    badgeKey: 'projects.items.project-amira.badge',
    subtitleKey: 'projects.items.project-amira.subtitle',
    image: '/Projects/Jira%20POS%20Kasir%20Toko%20Amira.png',
    points: [
      { labelKey: 'role', valueKey: 'projects.items.project-amira.points.role' },
      { labelKey: 'tools', valueKey: 'projects.items.project-amira.points.tools' },
      { labelKey: 'status', valueKey: 'projects.items.project-amira.points.status' },
    ],
  },
  {
    id: 'project-jmt',
    icon: '🚇',
    titleKey: 'projects.items.project-jmt.title',
    badgeKey: 'projects.items.project-jmt.badge',
    subtitleKey: 'projects.items.project-jmt.subtitle',
    image: '/Projects/Jmt.png',
    points: [
      { labelKey: 'achievement', valueKey: 'projects.items.project-jmt.points.achievement' },
      { labelKey: 'features', valueKey: 'projects.items.project-jmt.points.features' },
      { labelKey: 'scope', valueKey: 'projects.items.project-jmt.points.scope' },
    ],
    certLinks: [{ labelKey: 'projects.items.project-jmt.certLinks.haki', url: '/Sertifikat/Haki_compressed.pdf' }],
  },
  {
    id: 'project-ekatering',
    icon: '🍽️',
    titleKey: 'projects.items.project-ekatering.title',
    badgeKey: 'projects.items.project-ekatering.badge',
    subtitleKey: 'projects.items.project-ekatering.subtitle',
    image: '/Projects/UI_Homepage_E-Catering_-Desktop.png',
    points: [
      { labelKey: 'method', valueKey: 'projects.items.project-ekatering.points.method' },
      { labelKey: 'tools', valueKey: 'projects.items.project-ekatering.points.tools' },
      { labelKey: 'output', valueKey: 'projects.items.project-ekatering.points.output' },
      { labelKey: 'certification', valueKey: 'projects.items.project-ekatering.points.certification' },
    ],
    deliverables: [
      { key: 'projects.items.project-ekatering.deliverables.requirements' },
      { key: 'projects.items.project-ekatering.deliverables.userFlow' },
      { key: 'projects.items.project-ekatering.deliverables.wireframe' },
      { key: 'projects.items.project-ekatering.deliverables.uml' },
    ],
    certLinks: [{ labelKey: 'projects.items.project-ekatering.certLinks.bnsp', url: '/Sertifikat/BNSP.jpg' }],
  },
  {
    id: 'project-pilihanku',
    icon: '🎓',
    titleKey: 'projects.items.project-pilihanku.title',
    badgeKey: 'projects.items.project-pilihanku.badge',
    subtitleKey: 'projects.items.project-pilihanku.subtitle',
    points: [
      { labelKey: 'method', valueKey: 'projects.items.project-pilihanku.points.method' },
      { labelKey: 'function', valueKey: 'projects.items.project-pilihanku.points.function' },
      { labelKey: 'result', valueKey: 'projects.items.project-pilihanku.points.result' },
    ],
    testCases: [
      {
        id: 'TC.LOG.001',
        titleKey: 'projects.testing.cases.registerValid.title',
        typeKey: 'projects.testing.types.positive',
        typeClass: 'positive',
        statusKey: 'projects.testing.status.pass',
        statusClass: 'pass',
        scenarioKey: 'projects.testing.cases.registerValid.scenario',
        stepKeys: [
          'projects.testing.cases.registerValid.steps.step1',
          'projects.testing.cases.registerValid.steps.step2',
          'projects.testing.cases.registerValid.steps.step3',
          'projects.testing.cases.registerValid.steps.step4',
          'projects.testing.cases.registerValid.steps.step5',
        ],
        expectedKey: 'projects.testing.cases.registerValid.expected',
      },
      {
        id: 'TC.LOG.002',
        titleKey: 'projects.testing.cases.emailTaken.title',
        typeKey: 'projects.testing.types.negative',
        typeClass: 'negative',
        statusKey: 'projects.testing.status.pass',
        statusClass: 'pass',
        scenarioKey: 'projects.testing.cases.emailTaken.scenario',
        stepKeys: [
          'projects.testing.cases.emailTaken.steps.step1',
          'projects.testing.cases.emailTaken.steps.step2',
          'projects.testing.cases.emailTaken.steps.step3',
        ],
        expectedKey: 'projects.testing.cases.emailTaken.expected',
      },
      {
        id: 'TC.LOG.003',
        titleKey: 'projects.testing.cases.nisnTaken.title',
        typeKey: 'projects.testing.types.negative',
        typeClass: 'negative',
        statusKey: 'projects.testing.status.pass',
        statusClass: 'pass',
        scenarioKey: 'projects.testing.cases.nisnTaken.scenario',
        stepKeys: [
          'projects.testing.cases.nisnTaken.steps.step1',
          'projects.testing.cases.nisnTaken.steps.step2',
          'projects.testing.cases.nisnTaken.steps.step3',
        ],
        expectedKey: 'projects.testing.cases.nisnTaken.expected',
      },
    ],
  },
  {
    id: 'design-humas',
    icon: '🎨',
    titleKey: 'projects.items.design-humas.title',
    badgeKey: 'projects.items.design-humas.badge',
    subtitleKey: 'projects.items.design-humas.subtitle',
    link: 'https://www.figma.com/design/6SItYUPaaCwwi6UbsncQp5/Konten-HIMSI-Tel-U-Jakarta?node-id=0-1&t=y45lNi2649wy0L8c-1',
    points: [
      { labelKey: 'platform', valueKey: 'projects.items.design-humas.points.platform' },
      { labelKey: 'objective', valueKey: 'projects.items.design-humas.points.objective' },
      { labelKey: 'output', valueKey: 'projects.items.design-humas.points.output' },
    ],
  },
]
</script>

<style scoped>
.projects-list {
  display: grid;
  gap: 16px;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.5rem;
  align-items: center;
  padding: 1.3rem;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-radius: 18px;
  scroll-margin-top: 90px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: var(--border);
  transform: translateY(-3px);
}

.project-card.no-media {
  grid-template-columns: minmax(0, 1fr);
}

.project-card.flip .project-image-link {
  order: 2;
}

.project-image-link {
  display: block;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border-soft);
  background: var(--surface-3);
}

.project-image {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}

.project-heading {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.project-icon {
  font-size: 1.5rem;
  line-height: 1.2;
}

.project-title {
  margin: 0 0 0.5rem;
  color: var(--text-strong);
  font-size: 1.25rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
  background: var(--accent-soft);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}

.subtitle {
  margin: 0.9rem 0 0.6rem;
  color: var(--text-faint);
  font-style: italic;
  font-size: 0.9rem;
}

.project-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-points li {
  position: relative;
  padding-left: 1.2rem;
  margin: 0.45rem 0;
  line-height: 1.6;
  color: var(--text-muted);
}

.project-points li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.project-points strong {
  color: var(--text);
  font-weight: 600;
}

.block {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-soft);
}

.block-title {
  margin: 0 0 0.5rem;
  color: var(--text-strong);
  font-size: 0.98rem;
}

.block-intro {
  margin: 0 0 0.85rem;
  color: var(--text-faint);
  font-size: 0.9rem;
  line-height: 1.6;
}

.deliverables-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.4rem;
}

.deliverables-list li {
  position: relative;
  padding-left: 1.2rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.deliverables-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--accent-2);
}

/* test cases */
.testing-card {
  padding: 0.95rem 1rem;
  margin-top: 0.8rem;
  border-radius: 12px;
  background: var(--surface-3);
  border: 1px solid var(--border-soft);
}

.testing-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.testing-id {
  display: inline-block;
  margin-bottom: 0.25rem;
  color: var(--accent);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.testing-title {
  margin: 0;
  color: var(--text-strong);
  font-size: 0.95rem;
}

.testing-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
}

.testing-badge,
.testing-status {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.testing-badge.positive {
  background: rgba(66, 179, 126, 0.16);
  border: 1px solid rgba(66, 179, 126, 0.35);
  color: var(--accent-ok);
}

.testing-badge.negative {
  background: rgba(255, 183, 77, 0.16);
  border: 1px solid rgba(255, 183, 77, 0.32);
  color: var(--accent-warn);
}

.testing-status.pass {
  background: var(--accent-soft);
  border: 1px solid var(--border);
  color: var(--accent);
}

.testing-line {
  margin: 0.6rem 0 0;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.92rem;
}

.testing-line strong,
.testing-steps strong {
  color: var(--text);
}

.testing-steps {
  margin-top: 0.7rem;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.testing-steps ol {
  margin: 0.4rem 0 0;
  padding-left: 1.2rem;
}

.testing-steps li {
  margin: 0.28rem 0;
  line-height: 1.55;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 860px) {
  .project-card {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.1rem;
  }

  .project-card.flip .project-image-link {
    order: 0;
  }

  .testing-header {
    flex-direction: column;
  }

  .testing-badges {
    justify-content: flex-start;
  }
}
</style>
