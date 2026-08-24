TECH4YOU - FORMULARIO SMTP

Variables necesarias en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[contraseña configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

Después de guardar/cambiar variables:
1. Haz un Redeploy del proyecto.
2. Abre /api/contacto en el navegador.
3. Debe devolver JSON con ok:true y todas las variables en true.
4. Después prueba el formulario desde la web.

El correo soporte@kelatos.com no aparece visible en la web; solo se usa en backend.
