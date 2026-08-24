const nodemailer=require("nodemailer");
module.exports=async(req,res)=>{
 if(req.method!=="POST") return res.status(405).send("Método no permitido");
 try{
  const {nombre,telefono,email,equipo,mensaje}=req.body||{};
  const transporter=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||465),secure:String(process.env.SMTP_SECURE||"true")==="true",auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});
  await transporter.sendMail({from:`"Tech4You" <${process.env.SMTP_USER}>`,to:process.env.CONTACT_EMAIL||"soporte@kelatos.com",replyTo:email,subject:"Nueva consulta Tech4You - tech4you.es",text:`Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nEquipo: ${equipo}\n\nConsulta:\n${mensaje}`});
  res.setHeader("Content-Type","text/html; charset=utf-8");
  res.status(200).send('<meta charset="utf-8"><script>alert("Consulta enviada correctamente.");location.href="/#contacto";</script>');
 }catch(e){console.error(e);res.status(500).send("No se pudo enviar. Contacta por teléfono o WhatsApp.");}
};