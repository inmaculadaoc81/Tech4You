TECH4YOU — SERVICIO TÉCNICO ORDENADORES Y PORTÁTILES HP (MADRID)

Repositorio procesado por primera vez en esta sesión (no tenía README
general, solo README_FORMULARIO.txt con las variables SMTP).

Dominio:
https://tech4you.es/
(coherente en canonical, og:url, JSON-LD, robots.txt y sitemap.xml;
sin colisión con ningún otro dominio revisado en esta sesión)

Teléfono: +34 918 29 46 54, consistente en botones, caja de
información y footer (un único número, sin discrepancias); no se ha
tocado.

Sitio one-page desde su origen: no hay eliminaciones de /servicios/ ni
/modelos/ en el historial, así que NO se ha añadido middleware.mjs, no
aplica.

REVISIÓN (todo lo aplicado en esta primera pasada):
- Google Analytics: ya estaba configurado con G-WVKKQCKT7R (coincide
  exactamente con el código proporcionado); no se ha tocado.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar /
  Política de privacidad → https://kelatos.com/privacy-policy/), con
  diseño apilado a ancho completo en móvil.
- Schema.org: no existía. Añadido LocalBusiness (nombre, url,
  teléfono, descripción, dirección, areaServed Madrid, sameAs con
  Google Maps y YouTube).
- Meta tags og:* y robots: no existían. Añadidos.
- Sección SEO: no existía ninguna sección tipo guía. Añadida sección
  "Guía" (id="guia", enlazada en el menú) con contenido propio sobre
  averías habituales en equipos HP y cómo se plantea el diagnóstico.
- Borde blanco del botón del chat: faltaba tanto en la regla CSS como
  en el script de reposicionamiento JS. Añadido en ambos sitios.
- .navcall: ya mostraba solo "Llamar ahora" (sin el bug de texto
  largo); añadido white-space:nowrap como salvaguarda estándar.
- H1 de portada reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales), incluye la marca — antes tenía 16
  palabras: "Tu HP no enciende. Te damos presupuesto en 24 horas."
  Tamaño del H1 aumentado: clamp(36-56px) → clamp(46-74px) en
  escritorio, 34px → 44px en móvil.
- package.json: añadido engines (node 22.x) para igualar al resto de
  la familia.
- api/contacto.js ya usaba SMTP + nodemailer correctamente; no
  requería conversión.

REVISIÓN ADICIONAL — BUG REAL (a petición del cliente):
- No existía menú móvil: @media(max-width:920px){.links{display:none}}
  ocultaba la navegación sin ningún botón/desplegable alternativo, así
  que en móvil no había forma de navegar por el sitio (mismo bug
  encontrado en DonCargador y Trans4you). Añadido .menu-btn ("☰") +
  panel #mobileMenu con los mismos enlaces (incluido el teléfono).
- Menú de escritorio: varios enlaces ("Qué le pasa", "Tus datos",
  "Cómo funciona", "Opiniones y vídeos", "Pedir cita") se partían en
  dos líneas por falta de espacio (mismo problema visto en
  RecoverLab). Añadido white-space:nowrap a .links a y reducidos
  ligeramente gap (20px→16px) y font-size (14px→13.5px) para que
  quepan en una sola línea.

Variables SMTP en Vercel (ya configuradas, ver también
README_FORMULARIO.txt):
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com
