<template>
  <section class="contact-section">
    <h1>{{ $t('contact.title') }}</h1>
    <p class="intro">{{ $t('contact.intro') }}</p>

    <div class="contact-grid">
      <!-- Email Card -->
      <a href="mailto:dfhmbli09@gmail.com" class="contact-card">
        <div class="card-icon">✉️</div>
        <h3>{{ $t('contact.cards.email') || 'Email' }}</h3>
        <p class="card-value">dfhmbli09@gmail.com</p>
        <span class="card-action">{{ $t('contact.cards.email_action') || 'Send Email →' }}</span>
      </a>

      <!-- Location Card -->
      <div class="contact-card">
        <div class="card-icon">📍</div>
        <h3>{{ $t('contact.cards.location') || 'Location' }}</h3>
        <p class="card-value">Bekasi, Indonesia</p>
        <span class="card-action">{{ $t('contact.cards.location_action') || 'Based in West Java' }}</span>
      </div>

      <!-- LinkedIn Card -->
      <a href="www.linkedin.com/in/muhammad-dafa-hambali" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="card-icon">💼</div>
        <h3>{{ $t('contact.cards.linkedin') || 'LinkedIn' }}</h3>
        <p class="card-value">Connect with me</p>
        <span class="card-action">{{ $t('contact.cards.linkedin_action') || 'Visit Profile →' }}</span>
      </a>

      <!-- GitHub Card -->
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="card-icon">💻</div>
        <h3>{{ $t('contact.cards.github') || 'GitHub' }}</h3>
        <p class="card-value">Check my projects</p>
        <span class="card-action">{{ $t('contact.cards.github_action') || 'View Repos →' }}</span>
      </a>

      <!-- Instagram Card -->
      <a href="https://www.instagram.com/dafahambali?igsh=MWtmY3Roa3B5cWM2YQ==" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="card-icon">📸</div>
        <h3>{{ $t('contact.cards.instagram') || 'Instagram' }}</h3>
        <p class="card-value">@dafahambali</p>
        <span class="card-action">{{ $t('contact.cards.instagram_action') || 'Follow Me →' }}</span>
      </a>

      <!-- WhatsApp Card -->
      <a href="https://wa.me/6285254357690" target="_blank" rel="noopener noreferrer" class="contact-card">
        <div class="card-icon">💬</div>
        <h3>{{ $t('contact.cards.whatsapp') || 'WhatsApp' }}</h3>
        <p class="card-value">Quick Message</p>
        <span class="card-action">{{ $t('contact.cards.whatsapp_action') || 'Send Message →' }}</span>
      </a>
    </div>

    <div class="cta-section">
      <h2>{{ $t('contact.cta.heading') }}</h2>
      <p>{{ $t('contact.cta.text') }}</p>
      <a href="mailto:dfhmbli09@gmail.com" class="cta-button">{{ $t('contact.cta.button') }}</a>
    </div>
  </section>
</template>

<script setup>
// Contact data for reusability
const contacts = [
  {
    icon: '✉️',
    title: 'Email',
    value: 'dfhmbli09@gmail.com',
    action: 'Send Email',
    href: 'mailto:dfhmbli09@gmail.com',
    isLink: true
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Bekasi, Indonesia',
    action: 'Based in West Java',
    isLink: false
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: '@dafahambali',
    action: 'Visit Profile',
    href: 'https://linkedin.com/in/dafa-hambali',
    target: '_blank',
    isLink: true
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: '@dafahambali',
    action: 'View Repos',
    href: 'https://github.com/dafahambali',
    target: '_blank',
    isLink: true
  },
  {
    icon: '📸',
    title: 'Instagram',
    value: '@dafahambali',
    action: 'Follow',
    href: 'https://instagram.com/dafahambali',
    target: '_blank',
    isLink: true
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    value: '+62 852-5435-7690',
    action: 'Message',
    href: 'https://wa.me/6285254357690',
    target: '_blank',
    isLink: true
  }
];
</script>

<style scoped>
.contact-section {
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #e8eef7;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.intro {
  font-size: 1rem;
  color: #cfe6ff;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

/* Contact Grid - Clean & Simple */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
  margin-bottom: 3rem;
}

.contact-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(88, 149, 255, 0.4);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  line-height: 1;
}

.contact-card h3 {
  font-size: 1.1rem;
  color: #e8eef7;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.card-value {
  font-size: 0.95rem;
  color: #9ed0ff;
  margin: 0 0 0.8rem 0;
  flex-grow: 1;
}

.card-action {
  font-size: 0.85rem;
  color: #73b7ff;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact-card:hover .card-action {
  color: #cfe6ff;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border: 1px solid rgba(88, 149, 255, 0.2);
  border-radius: 14px;
  padding: 2rem;
  text-align: center;
}

.cta-section h2 {
  font-size: 1.6rem;
  color: #e8eef7;
  margin: 0 0 0.8rem 0;
  font-weight: 700;
}

.cta-section p {
  font-size: 0.95rem;
  color: #cfe6ff;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

/* Responsive */
@media (max-width: 600px) {
  .contact-section {
    padding: 2rem 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .intro {
    font-size: 0.9rem;
    margin-bottom: 1.8rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cta-section {
    padding: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.3rem;
  }
}
</style>
