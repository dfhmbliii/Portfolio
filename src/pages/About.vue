<template>
  <section class="about-section">
    <h1>{{ $t('about.title') }}</h1>

    <div class="about-grid">
      <div class="about-left">
        <h2>Perjalanan Profesional</h2>
        <p v-html="$t('about.p1')"></p>
        <p v-html="$t('about.p2')"></p>
        <p v-html="$t('about.p3')"></p>
        <p>{{ $t('about.conclusion') || '' }}</p>
      </div>

      <div class="about-right">
        <h2>Keahlian & Tools</h2>

        <div class="skills-category">
          <h3>📊 System Analysis</h3>
          <div class="skill-badges">
            <span class="badge">UML Diagrams</span>
            <span class="badge">BPMN Modeling</span>
            <span class="badge">AHP Decision Making</span>
            <span class="badge">Requirements Analysis</span>
          </div>
        </div>

        <div class="skills-category">
          <h3>💻 Web Development</h3>
          <div class="skill-badges">
            <span class="badge">Laravel (MVC)</span>
            <span class="badge">Vue.js 3</span>
            <span class="badge">MySQL</span>
            <span class="badge">RESTful APIs</span>
          </div>
        </div>

        <div class="skills-category">
          <h3>🖥️ Infrastructure & Tools</h3>
          <div class="skill-badges">
            <span class="badge">Linux (Rocky OS)</span>
            <span class="badge">Docker</span>
            <span class="badge">VMware Virtualization</span>
            <span class="badge">Visual Paradigm</span>
          </div>
        </div>

        <div class="skills-category">
          <h3>🎨 Design & Documentation</h3>
          <div class="skill-badges">
            <span class="badge">Figma UI/UX</span>
            <span class="badge">Enterprise Modeling</span>
            <span class="badge">Technical Documentation</span>
            <span class="badge">Canva Design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #e8eef7;
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #d7e2f2;
}

h3 {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.8rem;
  color: #9ed0ff;
}

p {
  line-height: 1.8;
  color: #cfe6ff;
  margin-bottom: 1rem;
}

strong {
  color: #73b7ff;
  font-weight: 600;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.about-left {
  padding-right: 1rem;
}

.about-right {
  padding-left: 1rem;
}

.skills-category {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(88, 149, 255, 0.15);
  color: #9ed0ff;
  border: 1px solid rgba(88, 149, 255, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.badge:hover {
  background: rgba(88, 149, 255, 0.25);
  border-color: rgba(88, 149, 255, 0.6);
}

@media (max-width: 920px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-left,
  .about-right {
    padding: 0;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}
</style>
