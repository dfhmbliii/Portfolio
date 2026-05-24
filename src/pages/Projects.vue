<template>
  <section class="projects-section">
    <h1>{{ $t('projects.title') }}</h1>
    <p class="intro">{{ $t('projects.intro') }}</p>

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        class="project-card"
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

        <h2>{{ project.icon }} {{ $t(project.titleKey) }}</h2>
        <span class="badge">{{ $t(project.badgeKey) }}</span>
        <p class="subtitle">{{ $t(project.subtitleKey) }}</p>
        <ul>
          <li v-for="item in project.points" :key="item.labelKey + (item.valueKey || item.value)">
            <strong>{{ $t(`projects.labels.${item.labelKey}`) }}</strong>: {{ item.valueKey ? $t(item.valueKey) : item.value }}
          </li>
        </ul>

        <div v-if="project.deliverables" class="deliverables-section">
          <h3>{{ $t('projects.deliverables.title') }}</h3>
          <ul class="deliverables-list">
            <li v-for="item in project.deliverables" :key="item.key">
              {{ $t(item.key) }}
            </li>
          </ul>
        </div>

        <div v-if="project.testCases" class="testing-section">
          <h3>{{ $t('projects.testing.title') }}</h3>
          <p class="testing-intro">{{ $t('projects.testing.intro') }}</p>

          <div v-for="testCase in project.testCases" :key="testCase.id" class="testing-card">
            <div class="testing-header">
              <div>
                <span class="testing-id">{{ testCase.id }}</span>
                <h4>{{ $t(testCase.titleKey) }}</h4>
              </div>
              <div class="testing-badges">
                <span class="testing-badge" :class="testCase.typeClass">{{ $t(testCase.typeKey) }}</span>
                <span class="testing-status" :class="testCase.statusClass">{{ $t(testCase.statusKey) }}</span>
              </div>
            </div>

            <p class="testing-scenario">
              <strong>{{ $t('projects.testing.scenario') }}</strong>
              {{ $t(testCase.scenarioKey) }}
            </p>

            <div class="testing-steps">
              <strong>{{ $t('projects.testing.steps') }}</strong>
              <ol>
                <li v-for="stepKey in testCase.stepKeys" :key="stepKey">{{ $t(stepKey) }}</li>
              </ol>
            </div>

            <p class="testing-expected">
              <strong>{{ $t('projects.testing.expectedResult') }}</strong>
              {{ $t(testCase.expectedKey) }}
            </p>
          </div>
        </div>

        <div class="cert-links" v-if="project.certLinks">
          <a v-for="cert in project.certLinks" :key="cert.labelKey || cert.label" class="card-link" :href="cert.url" target="_blank" rel="noopener noreferrer">
            {{ cert.labelKey ? $t(cert.labelKey) : cert.label }}
          </a>
        </div>

        <a v-else class="card-link" :href="`#${project.id}`">
          {{ $t('projects.viewDetails') }}
        </a>
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
    certLinks: [
      { labelKey: 'projects.items.project-jmt.certLinks.haki', url: '/Sertifikat/Haki_compressed.pdf' },
    ],
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
    certLinks: [
      { labelKey: 'projects.items.project-ekatering.certLinks.bnsp', url: '/Sertifikat/BNSP.jpg' },
    ],
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
    icon: '🎓',
    titleKey: 'projects.items.design-humas.title',
    badgeKey: 'projects.items.design-humas.badge',
    subtitleKey: 'projects.items.design-humas.subtitle',
    points: [
      { labelKey: 'platform', valueKey: 'projects.items.design-humas.points.platform' },
      { labelKey: 'objective', valueKey: 'projects.items.design-humas.points.objective' },
      { labelKey: 'output', valueKey: 'projects.items.design-humas.points.output' },
    ],
  },
]
</script>

<style scoped>
.projects-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 2rem 3rem;
}

.projects-section h1 {
  font-size: 2.5rem;
  margin: 0 0 0.75rem;
  color: #e8eef7;
}

.intro {
  margin: 0 0 2rem;
  color: #cfe6ff;
  line-height: 1.7;
  max-width: 720px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.35rem 1.4rem 1.2rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.project-image-link {
  display: block;
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.project-image {
  display: block;
  width: 100%;
  height: auto;
}

.project-card h2 {
  margin: 0 0 0.7rem;
  color: #f0f5ff;
  font-size: 1.2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(88, 149, 255, 0.14);
  border: 1px solid rgba(88, 149, 255, 0.28);
  color: #9ed0ff;
  font-size: 0.84rem;
  font-weight: 600;
}

.subtitle {
  margin: 0.9rem 0 1rem;
  color: #adc0da;
  font-style: italic;
}

.project-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.deliverables-section {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.deliverables-section h3 {
  margin: 0 0 0.45rem;
  color: #f0f5ff;
  font-size: 1rem;
}

.deliverables-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.deliverables-list li {
  position: relative;
  padding-left: 1.2rem;
  margin: 0.45rem 0;
  line-height: 1.55;
  color: #d7e2f2;
}

.deliverables-list li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #73b7ff;
}

.testing-section {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.testing-section h3 {
  margin: 0 0 0.35rem;
  color: #f0f5ff;
  font-size: 1rem;
}

.testing-intro {
  margin: 0 0 0.9rem;
  color: #adc0da;
  line-height: 1.6;
}

.testing-card {
  padding: 0.95rem 1rem;
  margin-top: 0.85rem;
  border-radius: 12px;
  background: rgba(10, 18, 32, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.testing-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.testing-id {
  display: inline-block;
  margin-bottom: 0.3rem;
  color: #73b7ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.testing-header h4 {
  margin: 0;
  color: #f0f5ff;
  font-size: 0.98rem;
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
  padding: 0.32rem 0.62rem;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
}

.testing-badge.positive {
  background: rgba(66, 179, 126, 0.14);
  border: 1px solid rgba(66, 179, 126, 0.3);
  color: #8fe0b5;
}

.testing-badge.negative {
  background: rgba(255, 167, 38, 0.14);
  border: 1px solid rgba(255, 167, 38, 0.28);
  color: #ffc97a;
}

.testing-status.pass {
  background: rgba(88, 149, 255, 0.14);
  border: 1px solid rgba(88, 149, 255, 0.28);
  color: #9ed0ff;
}

.testing-scenario,
.testing-expected {
  margin: 0.65rem 0 0;
  color: #d7e2f2;
  line-height: 1.6;
}

.testing-steps {
  margin-top: 0.75rem;
  color: #d7e2f2;
}

.testing-steps strong,
.testing-scenario strong,
.testing-expected strong {
  color: #f0f5ff;
}

.testing-steps ol {
  margin: 0.45rem 0 0;
  padding-left: 1.2rem;
}

.testing-steps li {
  margin: 0.3rem 0;
  line-height: 1.55;
}

.project-card li {
  position: relative;
  padding-left: 1.2rem;
  margin: 0.5rem 0;
  line-height: 1.6;
  color: #d7e2f2;
}

.project-card li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #73b7ff;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  color: #9ed0ff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.card-link::after {
  content: "↗";
  font-size: 0.85em;
}

.card-link:hover {
  color: #d7ecff;
  text-decoration: underline;
}

@media (max-width: 760px) {
  .projects-section {
    padding: 2rem 1rem 2.5rem;
  }

  .testing-header {
    flex-direction: column;
  }

  .testing-badges {
    justify-content: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .projects-section h1 {
    font-size: 2rem;
  }
}
</style>
