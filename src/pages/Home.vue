<template>
  <section class="section hero">
    <div class="hero-content">
      <p class="eyebrow">{{ $t('home.eyebrow') }}</p>

      <h1 class="hero-title">
        {{ $t('home.name') }}
        <span class="wave" aria-hidden="true">👋</span>
      </h1>

      <p class="hero-role">{{ $t('home.description') }}</p>

      <p class="status">
        <span class="status-dot" aria-hidden="true"></span>
        {{ $t('home.status') }}
      </p>

      <div class="stats">
        <div class="stat">
          <span class="stat-value">&lt; 1</span>
          <span class="stat-label">{{ $t('home.stats.experience') }}</span>
        </div>
        <div class="stat">
          <span class="stat-value">4</span>
          <span class="stat-label">{{ $t('home.stats.projects') }}</span>
        </div>
        <div class="stat">
          <span class="stat-value">3.64</span>
          <span class="stat-label">{{ $t('home.stats.gpa') }}</span>
        </div>
      </div>

      <div class="actions">
        <a class="btn primary" href="#projects">{{ $t('home.actions.viewPortfolio') }}</a>
        <a class="btn" href="/CV_Muhammad_Dafa_Hambali.pdf" target="_blank" rel="noopener">
          {{ $t('home.actions.downloadCV') }}
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="photo-frame">
        <img :src="profilePhoto" alt="Foto Muhammad Dafa Hambali" class="profile-photo" />
      </div>
      <div class="photo-badge">
        <span class="photo-badge-title">{{ $t('home.badge.title') }}</span>
        <span class="photo-badge-sub">{{ $t('home.badge.sub') }}</span>
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
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 3rem;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.hero-title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.05;
  color: var(--text-strong);
  letter-spacing: -0.02em;
}

.wave {
  display: inline-block;
  animation: wave 2.4s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
}

.hero-role {
  margin: 1rem 0 0;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 56ch;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 1.1rem 0 0;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(41, 214, 176, 0.55); }
  70% { box-shadow: 0 0 0 9px rgba(41, 214, 176, 0); }
  100% { box-shadow: 0 0 0 0 rgba(41, 214, 176, 0); }
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0 0;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.85rem;
  font-weight: 800;
  line-height: 1.1;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-faint);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 2rem;
}

/* photo */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.photo-frame {
  width: min(300px, 100%);
  aspect-ratio: 1 / 1;
  padding: 10px;
  border-radius: 30px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 22px;
  display: block;
}

.photo-badge {
  position: absolute;
  bottom: -16px;
  right: 4%;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  border-radius: 14px;
  background: var(--surface-solid);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.photo-badge-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-strong);
}

.photo-badge-sub {
  font-size: 0.75rem;
  color: var(--text-faint);
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 2.2rem;
    text-align: center;
    padding-top: 2.2rem;
    padding-bottom: 2.4rem;
  }

  .hero-role {
    margin-left: auto;
    margin-right: auto;
  }

  .stats,
  .actions {
    justify-content: center;
  }

  .hero-visual {
    order: -1;
  }

  .photo-badge {
    right: 50%;
    transform: translateX(50%);
  }
}

@media (max-width: 520px) {
  .stats {
    gap: 1.2rem;
  }

  .stat {
    flex: 1 1 auto;
  }

  .actions .btn {
    width: 100%;
  }
}
</style>
