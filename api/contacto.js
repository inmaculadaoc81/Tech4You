const nodemailer = require("nodemailer");

const clean = (v, max = 3000) =>
  String(v ?? "").replace(/[<>]/g, "").trim().slice(0, max);

module.exports = async (req, res) => {
  const envKeys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_SECURE",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_EMAIL"
  ];

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      service: "Tech4You contacto API",
      node: process.version,
      environment: Object.fromEntries(
        envKeys.map((key) => [key, Boolean(process.env[key])])
      )
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ ok: false, code: "METHOD_NOT_ALLOWED" });
  }

  try {
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
    const missing = required.filter((key) => !process.env[key]);

    if (missing.length) {
      console.error("Tech4You SMTP missing vars:", missing);
      return res.status(500).json({
        ok: false,
        code: "MISSING_SMTP_ENV",
        missing
      });
    }

    const body = req.body || {};
    const nombre = clean(body.nombre, 120);
    const telefono = clean(body.telefono, 60);
    const email = clean(body.email, 180);
    const equipo = clean(body.equipo, 180);
    const mensaje = clean(body.mensaje, 4000);

    if (!nombre || !telefono || !email || !equipo || !mensaje) {
      return res.status(400).json({
        ok: false,
        code: "INVALID_FORM_DATA"
      });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const secure =
      String(process.env.SMTP_SECURE ?? (port === 465 ? "true" : "false")) === "true";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Tech4You" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "soporte@kelatos.com",
      replyTo: email,
      subject: "Nueva consulta Tech4You - tech4you.es",
      text:
`Nueva consulta Tech4You

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}
Equipo: ${equipo}

Consulta:
${mensaje}`
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Tech4You SMTP error:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      command: error?.command
    });

    return res.status(500).json({
      ok: false,
      code: "SMTP_SEND_FAILED",
      detail: error?.code || "UNKNOWN"
    });
  }
};
