<template>
  <section class="section">
    <header class="section-head">
      <span class="section-tag">{{ $t('nav.skills') }}</span>
      <h2 class="section-title">{{ $t('skills.title') }}</h2>
      <p class="section-intro">{{ $t('skills.intro') }}</p>
    </header>

    <div v-for="group in groups" :key="group.key" class="skill-block">
      <h3 class="skill-block-title">{{ group.emoji }} {{ $t(`skills.sub.${group.key}`) }}</h3>

      <div v-if="group.tools" class="tech-grid">
        <div v-for="tool in group.tools" :key="tool.name" class="tech-item">
          <span class="tech-logo" :style="{ color: tool.color }" v-html="tool.svg"></span>
          <span class="tech-name">{{ tool.name }}</span>
        </div>
      </div>

      <div v-if="group.chips" class="skill-badges" :class="{ 'after-grid': group.tools }">
        <span v-for="chip in group.chips" :key="chip" class="badge">{{ chip }}</span>
      </div>
    </div>

    <div class="cert-highlight">
      <span class="cert-hl-icon" aria-hidden="true">🏆</span>
      <div>
        <span class="cert-hl-title">{{ $t('skills.cert.title') }}</span>
        <span class="cert-hl-value">{{ $t('skills.cert.value') }}</span>
      </div>
      <a class="card-link" href="/Sertifikat/BNSP.jpg" target="_blank" rel="noopener noreferrer">
        {{ $t('experience_page.cert_view') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import php from 'simple-icons/icons/php.svg?raw'
import laravel from 'simple-icons/icons/laravel.svg?raw'
import css from 'simple-icons/icons/css.svg?raw'
import mysql from 'simple-icons/icons/mysql.svg?raw'

import sap from 'simple-icons/icons/sap.svg?raw'
import jira from 'simple-icons/icons/jira.svg?raw'
import visualparadigm from 'simple-icons/icons/visualparadigm.svg?raw'
import diagramsdotnet from 'simple-icons/icons/diagramsdotnet.svg?raw'
import figma from 'simple-icons/icons/figma.svg?raw'
import vmware from 'simple-icons/icons/vmware.svg?raw'
import docker from 'simple-icons/icons/docker.svg?raw'
import git from 'simple-icons/icons/git.svg?raw'
import github from 'simple-icons/icons/github.svg?raw'
import google from 'simple-icons/icons/google.svg?raw'
import githubcopilot from 'simple-icons/icons/githubcopilot.svg?raw'

const groups = [
  {
    key: 'programming',
    emoji: '💻',
    tools: [
      { name: 'PHP', color: '#777BB4', svg: php },
      { name: 'Laravel', color: '#FF2D20', svg: laravel },
      { name: 'CSS', color: '#1572B6', svg: css },
      { name: 'SQL / MySQL', color: '#4479A1', svg: mysql },
    ],
  },
  {
    key: 'tools',
    emoji: '🛠️',
    tools: [
      { name: 'SAP ERP', color: '#0A6ED1', svg: sap },
      { name: 'Jira', color: '#2684FF', svg: jira },
      { name: 'Visual Paradigm', color: '#2E6DB4', svg: visualparadigm },
      { name: 'Draw.io', color: '#6C4FE0', svg: diagramsdotnet },
      { name: 'Figma', color: '#F24E1E', svg: figma },
      { name: 'VMware', color: '#607078', svg: vmware },
      { name: 'Docker', color: '#2496ED', svg: docker },
      { name: 'Git', color: '#F05032', svg: git },
      { name: 'GitHub', color: 'var(--text-strong)', svg: github },
      { name: 'Google Workspace', color: '#4285F4', svg: google },
      { name: 'GitHub Copilot', color: '#238636', svg: githubcopilot },
    ],
    chips: ['Canva'],
  },
  {
    key: 'methods',
    emoji: '📊',
    chips: [
      'Agile (Scrum/Kanban)',
      'System Analysis',
      'UI Design',
      'Analytical Hierarchy Process (AHP)',
      'UML Diagramming',
      'Software Quality Assurance',
    ],
  },
]
</script>

<style scoped>
.skill-block {
  margin-bottom: 1.6rem;
}

.skill-block:last-child {
  margin-bottom: 0;
}

.skill-block-title {
  margin: 0 0 0.8rem;
  font-size: 0.98rem;
  color: var(--text-strong);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
  gap: 12px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px 14px;
  border-radius: 16px;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.tech-item:hover {
  transform: translateY(-4px);
  border-color: var(--border);
  background: var(--surface-3);
}

.tech-logo {
  display: block;
  width: 32px;
  height: 32px;
}

.tech-logo :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
  fill: currentColor;
}

.tech-name {
  font-size: 0.74rem;
  font-weight: 600;
  text-align: center;
  color: var(--text-muted);
  line-height: 1.25;
  word-break: break-word;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badges.after-grid {
  margin-top: 12px;
}

.badge {
  display: inline-block;
  padding: 0.38rem 0.85rem;
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.badge:hover {
  background: var(--surface-3);
  border-color: var(--accent);
}

.cert-highlight {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 0.4rem;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-left: 3px solid var(--accent-2);
}

.cert-hl-icon {
  font-size: 1.7rem;
  line-height: 1;
}

.cert-highlight > div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.cert-hl-title {
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.cert-hl-value {
  font-weight: 700;
  color: var(--text-strong);
  font-size: 0.98rem;
}

@media (max-width: 560px) {
  .cert-highlight {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
