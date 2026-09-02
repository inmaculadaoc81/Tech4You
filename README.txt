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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 ya era distinto ("Tu HP no enciende. Te damos presupuesto en 24
  horas."), no repite la plantilla "no funciona" de otros repos; no
  se ha tocado.
- Texto decorativo ".hero:after" ya se ocultaba en móvil
  (display:none en ≤560px); no aplica ningún cambio.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Añadida franja de aviso de servicio técnico independiente debajo
  del menú (no existía en ningún sitio del repo).
- Enlace de política de privacidad: la casilla existía pero sin
  enlace. Añadido a https://kelatos.com/privacy-policy/, en azul y
  subrayado.
- Botón "Atención Telefónica..." sin icono, a diferencia del de
  WhatsApp. Añadido.
- Formulario verificado: fetch a /api/contacto coincide con
  api/contacto.js; conexión correcta.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 37/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- Verificado: el mensaje prellenado de WhatsApp ya decía "¡Hola
  Tech4You!"; no requería cambios.
- BUG REAL — el menú móvil (#mobileMenu, estilo atributo hidden) no
  tenía ningún listener que lo cerrara al pulsar un enlace. Añadido el
  script estándar de la familia.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 en móvil estaba en 44px. Corregido a 48px.
- BUG REAL — botones del hero (.btn) con border-radius de 15px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/collect (colores sólidos) y relleno
  sólido con var(--blue2) + texto blanco en el botón de teléfono
  (estilo contorno) al pasar el ratón.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.

REVISIÓN ADICIONAL (nueva regla de menú móvil, a petición del cliente):
- BUG REAL — la franja de aviso de independencia estaba dentro de
  <header>. Movida fuera de <header>, como hermana justo después de
  él y antes del hero: sigue siendo la misma franja amarilla de ancho
  completo.
- Verificado: el header (.header{position:sticky;top:0}) ya se
  mantenía fijo/pegado arriba al hacer scroll; no requería cambios.
- Verificado de nuevo: el checklist de 7 puntos ya estaba aplicado de
  una pasada anterior; no requería cambios.
