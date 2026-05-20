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
    'exp.e1.body':  'Responsable técnico único del framework RP en EnforceScript para la comunidad hispanohablante más completa de Arma Reforger. +20 sistemas en producción: economía, inventario, facciones, telefonía, policial y persistencia. Backend escalado de JSON → MongoDB → progressSQL.',
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
    'proj.dhrp.desc':        'Framework RP completo con +20 sistemas interconectados en EnforceScript: economía real, facciones, telefonía, sistema policial y backend SQL propio con persistencia total.',
    'proj.recorder.desc':    'Grabación de llamadas con enfoque en calidad de audio, estabilidad de servicio en background y compliance con normativas regionales.',
    'proj.notificationsilence.desc': 'Bloqueo inteligente de notificaciones por app, categoría y horario. Incluye modo premium con compra única o desbloqueo temporal mediante anuncios bonificados.',

    'status.live': 'En producción',
    'status.dev':  'En desarrollo',

    'stack.label':  'Stack Tecnológico',
    'stack.title':  'Tecnologías y Herramientas',
    'stack.mobile': 'Mobile · Android',
    'stack.game':   'Game Engineering',
    'stack.infra':  'Infraestructura',
    'stack.ai':     'IA & Herramientas',

    'stack.mobile.level': 'Especialidad principal',
    'stack.mobile.desc':  'Desarrollo nativo con Kotlin y Jetpack Compose. Apps publicadas en Google Play con IA on-device (Gemma/MediaPipe), arquitectura MVVM limpia y Room para persistencia offline.',
    'stack.game.level':   'Especialidad principal',
    'stack.game.desc':    'Frameworks RP completos en EnforceScript sobre Enfusion Engine. Arquitectura client-server con RPC, persistencia EPF/SQL y diseño de sistemas de juego a escala de producción.',
    'stack.infra.level':  'Configuración y despliegue',
    'stack.infra.desc':   'Administración de servidores Windows Server y VPS para entornos de juego y web. Configuración de BBDD, Apache, reglas de firewall y acceso remoto RDP.',
    'stack.ai.level':     'Flujo de trabajo diario',
    'stack.ai.desc':      'Desarrollo asistido por IA desde el primer día. GitHub Copilot + Claude como pair programmer permanente. +1.800 horas de co-desarrollo documentadas. MCP Servers para contexto persistente.',

    'about.idiomas':      'Idiomas',
    'about.tz':           'Zona horaria',
    'about.modality':     'Remoto',
    'about.modality.lbl': 'Modalidad',
    'about.focus':        'Android + Game Engineering',
    'about.focus.lbl':    'Áreas principales',
    'about.ai.lbl':       'IA en cada proyecto',

    'exp.e1.m1': 'sistemas activos',
    'exp.e1.m2': 'miembros activos',
    'exp.e1.m3': 'en producción',
    'exp.e2.m1': 'comunidad',
    'exp.e2.m2': 'en producción',
    'exp.e2.m3': 'servidor dedicado',

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
    'exp.e1.body':  'Sole technical lead for the EnforceScript RP framework powering the most complete Spanish-speaking Arma Reforger community. +20 systems in production: economy, inventory, factions, phone, police and persistence. Backend scaled from JSON → MongoDB → progressSQL.',
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
    'proj.dhrp.desc':        'Full RP framework with +20 interconnected systems in EnforceScript: real economy, factions, phone, police system and custom SQL backend with full persistence.',
    'proj.recorder.desc':    'Call recording focused on audio quality, background service stability and regional legal compliance.',
    'proj.notificationsilence.desc': 'Smart notification blocking by app, category, and schedule. Includes premium mode with one-time purchase or temporary unlock through rewarded ads.',

    'status.live': 'In production',
    'status.dev':  'In development',

    'stack.label':  'Technology Stack',
    'stack.title':  'Technologies & Tools',
    'stack.mobile': 'Mobile · Android',
    'stack.game':   'Game Engineering',
    'stack.infra':  'Infrastructure',
    'stack.ai':     'AI & Tools',

    'stack.mobile.level': 'Main specialty',
    'stack.mobile.desc':  'Native development with Kotlin and Jetpack Compose. Apps published on Google Play with on-device AI (Gemma/MediaPipe), clean MVVM architecture and Room for offline persistence.',
    'stack.game.level':   'Main specialty',
    'stack.game.desc':    'Complete RP frameworks in EnforceScript on Enfusion Engine. Client-server architecture with RPC, EPF/SQL persistence and production-scale game system design.',
    'stack.infra.level':  'Setup & deployment',
    'stack.infra.desc':   'Windows Server and VPS administration for game and web environments. Database setup, Apache, firewall rules and RDP remote access.',
    'stack.ai.level':     'Daily workflow',
    'stack.ai.desc':      'AI-augmented development from day one. GitHub Copilot + Claude as permanent pair programmer. +1,800 co-development hours documented. MCP Servers for persistent context.',

    'about.idiomas':      'Languages',
    'about.tz':           'Timezone',
    'about.modality':     'Remote',
    'about.modality.lbl': 'Work mode',
    'about.focus':        'Android + Game Engineering',
    'about.focus.lbl':    'Main areas',
    'about.ai.lbl':       'AI on every project',

    'exp.e1.m1': 'active systems',
    'exp.e1.m2': 'active members',
    'exp.e1.m3': 'in production',
    'exp.e2.m1': 'community',
    'exp.e2.m2': 'in production',
    'exp.e2.m3': 'dedicated server',

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
