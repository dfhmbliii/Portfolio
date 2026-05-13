<template>
  <section class="hero">
    <div class="hero-visual">
      <div class="photo-frame">
        <img :src="profilePhoto" alt="Foto profil Muhammad Dafa Hambali" class="profile-photo" />
      </div>
    </div>

    <div class="hero-content">
      <p class="eyebrow">S1 Sistem Informasi - Kampus Jakarta • Telkom University</p>
      <h1>Muhammad Dafa Hambali</h1>
      <p class="description">Project Manager | System Analyst | Teaching Assistant</p>

      <div class="stats">
        <div><span>16+</span>Months Experience</div>
        <div><span>4</span>Major Projects</div>
        <div><span>3.64</span>GPA</div>
      </div>

      <div class="tech-stack">
        <span class="tech-icon">Laravel</span>
        <span class="tech-icon">Vue.js</span>
        <span class="tech-icon">Figma</span>
        <span class="tech-icon">UML</span>
      </div>

      <div class="actions">
        <router-link to="/projects" class="btn primary">View Portfolio</router-link>
        <a href="#" class="btn secondary">Download CV</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const profilePhoto = new URL('../../DAFA00035.JPG', import.meta.url).href
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 2.5rem;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.photo-frame {
  width: 240px;
  height: 240px;
  padding: 10px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  border-radius: 20px;
  display: block;
}

.hero-content {
  text-align: left;
}

.eyebrow {
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.9;
  margin: 0 0 0.75rem 0;
}

h1 { font-size: 3rem; margin: 0 0 0.5rem 0; }
.description { font-size: 1rem; opacity: 0.85; margin: 0.75rem 0 2rem 0; }

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  font-size: 0.9rem;
}

.stats span {
  font-size: 1.8rem;
  font-weight: bold;
  display: block;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 1rem;
}

.tech-stack {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.tech-icon {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  transition: all 0.3s ease;
}

.btn.primary {
  background: white;
  color: #667eea;
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn.secondary {
  background: transparent;
  color: white;
  border: 1.5px solid white;
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 820px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .photo-frame {
    width: 200px;
    height: 200px;
  }

  .tech-stack {
    justify-content: center;
  }

  .actions {
    justify-content: center;
  }
}

@media (max-width: 560px) {
  .hero {
    padding: 2.5rem 1.25rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
