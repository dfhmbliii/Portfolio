<template>
  <section class="section">
    <header class="section-head">
      <span class="section-tag">{{ $t('nav.experience') }}</span>
      <h2 class="section-title">{{ $t('experience_page.title') }}</h2>
      <p class="section-intro">{{ $t('experience_page.intro') }}</p>
    </header>

    <div class="timeline">
      <article class="experience-card">
        <div class="card-top">
          <div>
            <h3 class="card-title">{{ $t('experience_page.telkom_access.company') }}</h3>
            <p class="card-role">{{ $t('experience_page.telkom_access.role') }}</p>
          </div>
          <span class="period">{{ $t('experience_page.telkom_access.period') }}</span>
        </div>
        <ul>
          <li>{{ $t('experience_page.telkom_access.bullet1') }}</li>
          <li>{{ $t('experience_page.telkom_access.bullet2') }}</li>
        </ul>
      </article>
    </div>

    <h3 class="group-title">{{ $t('experience_page.teaching_assistant_section') }}</h3>

    <div class="timeline">
      <article v-for="item in teaching" :key="item.titleKey" class="experience-card">
        <h4 class="card-title sub">{{ $t(item.titleKey) }}</h4>
        <ul>
          <li v-for="bulletKey in item.bulletKeys" :key="bulletKey">{{ $t(bulletKey) }}</li>
        </ul>
      </article>
    </div>

    <h3 class="group-title">{{ $t('experience_page.org_section') }}</h3>

    <div class="timeline">
      <article class="experience-card">
        <div class="card-top">
          <div>
            <h4 class="card-title sub">{{ $t('experience_page.org.chair_title') }}</h4>
            <p class="card-role">{{ $t('experience_page.org.chair_role') }}</p>
          </div>
        </div>
        <ul>
          <li>{{ $t('experience_page.org.chair_b1') }}</li>
          <li>{{ $t('experience_page.org.chair_b2') }}</li>
          <li>{{ $t('experience_page.org.chair_b3') }}</li>
        </ul>
      </article>

      <article class="experience-card">
        <h4 class="card-title sub">{{ $t('experience_page.org.pr_title') }}</h4>
        <ul>
          <li>{{ $t('experience_page.org.pr_b1') }}</li>
          <li>{{ $t('experience_page.org.pr_b2') }}</li>
        </ul>
      </article>
    </div>

    <h3 class="group-title">{{ $t('experience_page.cert_section') }}</h3>

    <div class="cert-grid">
      <article class="cert-card" id="haki-certificate">
        <span class="cert-icon" aria-hidden="true">📜</span>
        <h4 class="card-title sub">{{ $t('projects.items.project-jmt.title') }}</h4>
        <p class="issuer">{{ $t('experience_page.haki_issuer') }}</p>
        <p class="cert-desc">{{ $t('experience_page.haki_desc') }}</p>
        <a class="card-link" href="/Sertifikat/Haki_compressed.pdf" target="_blank" rel="noopener noreferrer">
          {{ $t('experience_page.cert_view') }}
        </a>
      </article>

      <article class="cert-card" id="bnsp-certificate">
        <span class="cert-icon" aria-hidden="true">🏆</span>
        <h4 class="card-title sub">BNSP System Analyst</h4>
        <p class="issuer">Badan Nasional Sertifikasi Profesi Indonesia</p>
        <p class="cert-desc">{{ $t('experience_page.bnsp_desc') }}</p>
        <a class="card-link" href="/Sertifikat/BNSP.jpg" target="_blank" rel="noopener noreferrer">
          {{ $t('experience_page.cert_view') }}
        </a>
      </article>

      <article class="cert-card wide" id="teaching-assistant">
        <span class="cert-icon" aria-hidden="true">👨‍🏫</span>
        <h4 class="card-title sub">{{ $t('experience_page.ta_title') }}</h4>
        <p class="issuer">{{ $t('experience_page.ta_period') }}</p>
        <p class="cert-desc">{{ $t('experience_page.ta_desc') }}</p>
        <div class="cert-links">
          <a class="card-link" href="/Sertifikat/Muhammad Dafa Hambali_Sertifikat_Asprak_Analisis_Perancangan_Sistem_Informasi_compressed.pdf" target="_blank" rel="noopener noreferrer">Analisis Sistem</a>
          <a class="card-link" href="/Sertifikat/Muhammad Dafa Hambali_Sertifikat_Asprak_Pengembangan_Aplikasi_Website_compressed.pdf" target="_blank" rel="noopener noreferrer">Web Development</a>
          <a class="card-link" href="/Sertifikat/Muhammad Dafa Hambali_Sertifikat_Asprak_Sistem_Operasi_compressed.pdf" target="_blank" rel="noopener noreferrer">Sistem Operasi</a>
          <a class="card-link" href="/Sertifikat/Sertifikat_Arsitektur_Enterprise.jpg" target="_blank" rel="noopener noreferrer">Arsitektur Enterprise</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// Jumlah bullet tiap mata kuliah harus cocok dengan kunci di locales/*.json
const courses = [
  ['analysis', 2],
  ['web', 2],
  ['os', 3],
  ['enterprise', 3],
]

const teaching = courses.map(([key, count]) => ({
  titleKey: `experience_page.ta_courses.${key}.title`,
  bulletKeys: Array.from({ length: count }, (_, i) => `experience_page.ta_courses.${key}.b${i + 1}`),
}))
</script>

<style scoped>
.timeline {
  display: grid;
  gap: 12px;
}

.group-title {
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.15rem;
  color: var(--text-strong);
  border-bottom: 1px solid var(--border-soft);
}

.experience-card {
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-left: 3px solid var(--accent);
  border-radius: 14px;
  padding: 1.15rem 1.3rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.experience-card:hover {
  transform: translateX(4px);
  border-left-color: var(--accent-2);
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.card-title {
  margin: 0 0 0.25rem;
  color: var(--text-strong);
  font-size: 1.1rem;
}

.card-title.sub {
  font-size: 1rem;
}

.card-role {
  margin: 0;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.92rem;
}

.period {
  flex-shrink: 0;
  padding: 4px 11px;
  border-radius: 999px;
  background: var(--surface-3);
  color: var(--text-muted);
  font-size: 0.76rem;
  font-weight: 600;
  white-space: nowrap;
}

/* Baris penerbit sertifikat: harus boleh pindah baris,
   kalau pakai .period (nowrap) teksnya akan keluar card. */
.issuer {
  margin: 0 0 0.6rem;
  color: var(--text-faint);
  font-size: 0.86rem;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.experience-card ul {
  list-style: none;
  padding: 0;
  margin: 0.85rem 0 0;
}

.experience-card li {
  position: relative;
  padding-left: 1.3rem;
  margin: 0.5rem 0;
  line-height: 1.65;
  color: var(--text-muted);
}

.experience-card li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* certificates */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
}

.cert-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 1.2rem 1.3rem;
}

.cert-card.wide {
  grid-column: 1 / -1;
}

.cert-icon {
  font-size: 1.6rem;
  line-height: 1;
  margin-bottom: 0.6rem;
}

.cert-desc {
  margin: 0.6rem 0 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex-grow: 1;
}

.cert-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.25rem;
}

@media (max-width: 560px) {
  .card-top {
    flex-direction: column;
    gap: 0.5rem;
  }

  .experience-card:hover {
    transform: none;
  }
}
</style>
