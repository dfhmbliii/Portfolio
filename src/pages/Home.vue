<template>
  <section class="section hero">
    <div class="avatar">
      <img :src="profilePhoto" alt="Foto Muhammad Dafa Hambali" class="profile-photo" />
    </div>

    <h1 class="hero-title">{{ $t('home.name') }}</h1>

    <p class="hero-role">{{ $t('home.description') }}</p>

    <div class="actions">
      <a class="btn primary" href="#contact">{{ $t('home.actions.getInTouch') }}</a>
      <CvDownload :locale="props.locale" />
    </div>
  </section>
</template>

<script setup>
import CvDownload from '../components/CvDownload.vue'

const props = defineProps({ locale: { type: String, default: '' } })

const profilePhoto = new URL('../../DAFA00035.JPG', import.meta.url).href
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 0 4rem;
}

.avatar {
  width: clamp(150px, 22vw, 200px);
  aspect-ratio: 1 / 1;
  padding: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.profile-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 50%;
  background: var(--surface-solid);
}

.hero-title {
  margin: 2rem 0 0;
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-strong);
}

.hero-role {
  margin: 1.2rem 0 0;
  max-width: 52ch;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 2.2rem;
}

@media (max-width: 520px) {
  .actions .btn {
    width: 100%;
  }
}
</style>
