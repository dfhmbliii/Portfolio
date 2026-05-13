<template>
  <section class="projects-section">
    <h1>Projects</h1>
    <p class="intro">
      Beberapa proyek utama yang menunjukkan kombinasi analisis sistem, eksekusi teknis, dan hasil yang bisa langsung dipakai.
    </p>

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
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
          <img :src="project.image" :alt="project.title" class="project-image" />
        </a>
        <h2>{{ project.icon }} {{ project.title }}</h2>
        <span class="badge">{{ project.badge }}</span>
        <p class="subtitle">{{ project.subtitle }}</p>
        <ul>
          <li v-for="item in project.points" :key="item">
            <strong>{{ item.label }}</strong>: {{ item.value }}
          </li>
        </ul>
        <div class="cert-links" v-if="project.certLinks">
          <a v-for="cert in project.certLinks" :key="cert.label" class="card-link" :href="cert.url" target="_blank" rel="noopener noreferrer">
            {{ cert.label }}
          </a>
        </div>
        <a v-else class="card-link" :href="`#${project.id}`">
          Lihat Detail
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
    title: 'Sistem POS Kasir Toko Amira',
    badge: 'React JS • Jira • Project Management',
    subtitle: 'Project Tugas Besar',
    image: '/Projects/Jira%20POS%20Kasir%20Toko%20Amira.png',
    points: [
      { label: 'Role', value: 'Project Manager & System Analyst' },
      { label: 'Tools', value: 'Jira (sprint, backlog, issue tracking)' },
      { label: 'Status', value: 'Released & Operational' },
    ],
  },
  {
    id: 'project-jmt',
    icon: '🚇',
    title: 'Website Jakarta Metro Transit (JMT)',
    badge: 'Full-Stack • HAKI Certified',
    subtitle: 'Project Tugas Besar | Intellectual Property Protected',
    points: [
      { label: 'Achievement', value: 'HAKI Certificate (Surat Pencatatan Ciptaan)' },
      { label: 'Features', value: 'Integrated transit map, ticket simulation' },
      { label: 'Scope', value: 'Public transit information platform' },
    ],
    certLinks: [
      { label: 'Sertifikat HAKI', url: '/Sertifikat/Haki_compressed.pdf' },
    ],
  },
  {
    id: 'project-ekatering',
    icon: '🍽️',
    title: 'E-Katering System Design',
    badge: 'Figma • UI/UX • BNSP Certification',
    subtitle: 'Sertifikasi BNSP System Analyst',
    points: [
      { label: 'Method', value: 'System analysis & requirements' },
      { label: 'Output', value: 'Complete UI/UX design in Figma' },
      { label: 'Certification', value: 'BNSP System Analyst Certified' },
    ],
    certLinks: [
      { label: 'Sertifikat BNSP', url: '/Sertifikat/BNSP.jpg' },
    ],
  },
  {
    id: 'project-pilihanku',
    icon: '🎓',
    title: 'Website Pilihanku',
    badge: 'Decision Support System • AHP Algorithm',
    subtitle: 'Tugas Akhir',
    points: [
      { label: 'Method', value: 'MCDM (Multi-Criteria Decision Making) dengan AHP' },
      { label: 'Function', value: 'Membantu calon mahasiswa memilih jurusan' },
      { label: 'Result', value: 'Real-time calculation & recommendations' },
    ],
  },
   {
    id: 'design-humas',
    icon: '🎓',
    title: 'Strategi Visual & Social Media Design HIMSI',
    badge: 'Figma • Social Media Management • Canva • Instagram • Content Strategy',
    points: [
      { label: 'Objective', value: 'Merancang identitas visual dan materi publikasi untuk program kerja himpunan guna meningkatkan engagement dan partisipasi mahasiswa.' },
      { label: 'Output', value: 'Desain feed edukatif, poster acara, dan guideline visual.' },
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

h1 {
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

  .projects-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
