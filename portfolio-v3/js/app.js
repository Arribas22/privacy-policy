/* ============================================================
   PORTFOLIO V3 — app.js
   ============================================================ */

// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {
  es: {
    'nav.exp':      'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.stack':    'Stack',
    'nav.contact':  'Contacto',

    'hero.badge': 'Disponible para proyectos',
    'hero.title': 'Independent Software Developer',
    'hero.desc':  'Android nativo · Game systems en Arma Reforger · Infraestructura de servidores · Desarrollo asistido por IA',
    'hero.cta1':  'Ver proyectos',
    'hero.cta2':  'Contactar',

    'stat1': 'Horas en servidores de juego',
    'stat2': 'Horas con GitHub Copilot',
    'stat3': 'Sistemas RP en producción',

    'exp.label':    'Experiencia Profesional',
    'exp.title':    'Lead Developer en Producción',
    'exp.e1.role':  'Lead Developer',
    'exp.e1.date':  '2024 — Presente',
    'exp.e1.body':  'Responsable técnico único del framework RP en EnforceScript para la comunidad hispanohablante más completa de Arma Reforger. 20+ sistemas en producción: economía, inventario, facciones, telefonía, policial y persistencia. Backend escalado de JSON → MongoDB → progressSQL.',
    'exp.e2.role':  'Lead Developer',
    'exp.e2.date':  '2024 — Presente',
    'exp.e2.body':  'Lead Developer del servidor de roleplay de habla inglesa en Arma Reforger. Diseño e implementación del framework técnico, sistemas de juego y arquitectura de backend para la comunidad internacional.',
    'badge.active': 'Activo',

    'proj.label':           'Proyectos Destacados',
    'proj.title':           'Producto en Producción',
    'proj.platform.android': 'Android · Google Play',
    'proj.platform.game':    'Arma Reforger · Servidor dedicado',
    'proj.mindease.desc':    'App de bienestar mental con IA local (Gemma 3 1B offline), ejercicios CBT, análisis de estado emocional y diseño orientado a privacidad total.',
    'proj.desvio.desc':      'Automatización de reglas de desvío de llamadas basadas en horarios y perfiles configurables. Lógica en background con WorkManager, sin permisos innecesarios.',
    'proj.dhrp.desc':        'Framework RP completo con 20+ sistemas interconectados en EnforceScript: economía real, facciones, telefonía, sistema policial y backend SQL propio con persistencia total.',
    'proj.recorder.desc':    'Grabación de llamadas con enfoque en calidad de audio, estabilidad de servicio en background y compliance con normativas regionales.',

    'status.live': 'En producción',
    'status.dev':  'En desarrollo',

    'stack.label':  'Stack Tecnológico',
    'stack.title':  'Tecnologías y Herramientas',
    'stack.mobile': 'Mobile · Android',
    'stack.game':   'Game Engineering',
    'stack.infra':  'Infraestructura',
    'stack.ai':     'IA & Herramientas',

    'contact.label': 'Contacto',
    'contact.title': '¿Hablamos?',
    'contact.desc':  'Abierto a proyectos de desarrollo Android, DevOps, game engineering y consultoría técnica. Tanto en español como en inglés.',
    'contact.cta':   'Enviar mensaje',

    'footer.copy': 'Desarrollado con GitHub Copilot & Claude · 2026',
  },

  en: {
    'nav.exp':      'Experience',
    'nav.projects': 'Projects',
    'nav.stack':    'Stack',
    'nav.contact':  'Contact',

    'hero.badge': 'Available for projects',
    'hero.title': 'Independent Software Developer',
    'hero.desc':  'Native Android · Game systems in Arma Reforger · Server infrastructure · AI-driven development',
    'hero.cta1':  'View projects',
    'hero.cta2':  'Contact',

    'stat1': 'Hours on game servers',
    'stat2': 'Hours with GitHub Copilot',
    'stat3': 'RP systems in production',

    'exp.label':    'Professional Experience',
    'exp.title':    'Lead Developer in Production',
    'exp.e1.role':  'Lead Developer',
    'exp.e1.date':  '2024 — Present',
    'exp.e1.body':  'Sole technical lead for the EnforceScript RP framework powering the most complete Spanish-speaking Arma Reforger community. 20+ systems in production: economy, inventory, factions, phone, police and persistence. Backend scaled from JSON → MongoDB → progressSQL.',
    'exp.e2.role':  'Lead Developer',
    'exp.e2.date':  '2024 — Present',
    'exp.e2.body':  'Lead Developer for the English-speaking Arma Reforger roleplay server. Design and implementation of the technical framework, game systems and backend architecture for the international community.',
    'badge.active': 'Active',

    'proj.label':           'Featured Projects',
    'proj.title':           'Product in Production',
    'proj.platform.android': 'Android · Google Play',
    'proj.platform.game':    'Arma Reforger · Dedicated Server',
    'proj.mindease.desc':    'Mental wellness app with local AI (Gemma 3 1B offline), CBT exercises, emotional state analysis and total privacy-first design.',
    'proj.desvio.desc':      'Call forwarding automation based on schedules and configurable profiles. Background logic with WorkManager, minimal permissions.',
    'proj.dhrp.desc':        'Full RP framework with 20+ interconnected systems in EnforceScript: real economy, factions, phone, police system and custom SQL backend with full persistence.',
    'proj.recorder.desc':    'Call recording focused on audio quality, background service stability and regional legal compliance.',

    'status.live': 'In production',
    'status.dev':  'In development',

    'stack.label':  'Technology Stack',
    'stack.title':  'Technologies & Tools',
    'stack.mobile': 'Mobile · Android',
    'stack.game':   'Game Engineering',
    'stack.infra':  'Infrastructure',
    'stack.ai':     'AI & Tools',

    'contact.label': 'Contact',
    'contact.title': "Let's talk?",
    'contact.desc':  'Open to Android development, DevOps, game engineering and technical consulting projects. Both in Spanish and English.',
    'contact.cta':   'Send a message',

    'footer.copy': 'Built with GitHub Copilot & Claude · 2026',
  },
};

// ============================================================
// STATE
// ============================================================

let currentLang = 'es';

// ============================================================
// LANGUAGE TOGGLE
// ============================================================

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.getElementById('lang-btn').textContent = lang === 'es' ? 'EN' : 'ES';
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  applyTranslations(currentLang);
}

document.getElementById('lang-btn').addEventListener('click', toggleLang);

// ============================================================
// NAV SCROLL BEHAVIOR
// ============================================================

const nav = document.getElementById('nav');

function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ============================================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -36px 0px',
  }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

// ============================================================
// SMOOTH ANCHOR SCROLL (fallback for browsers without CSS support)
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// INIT
// ============================================================

applyTranslations(currentLang);
