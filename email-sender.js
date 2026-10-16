import nodemailer from 'nodemailer';

/**
 * Étape 5 : email-sender.js
 * Envoi d'email avec Nodemailer
 */
export async function sendEmailDemo() {
  console.log("📧 Initialisation de l'envoi d'email avec Nodemailer...");

  // Création d'un compte de test Ethereal automatisé
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  const mailOptions = {
    from: '"GoMyCode Node.js Checkpoint" <dariusange222@gmail.com>',
    to: 'dariusange222@gmail.com',
    subject: 'Félicitations pour le Checkpoint Node.js ! 🚀',
    text: 'Bonjour Darius, votre script Node.js a envoyé cet email avec succès via Nodemailer.',
    html: `
      <div style="font-family: Arial, sans-serif; background: #0a0d14; color: #f8fafc; padding: 20px; border-radius: 10px;">
        <h2 style="color: #6366f1;">GoMyCode Bootcamp - Node.js Checkpoint</h2>
        <p>Email envoyé avec succès par <strong>Karma-22 (Darius Ange)</strong> à l'aide de <strong>Nodemailer</strong>.</p>
        <p style="color: #10b981;">Statut : ✅ Conforme aux spécifications du checkpoint.</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email envoyé avec succès !`);
    console.log(`- Message ID : ${info.messageId}`);
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`- URL de prévisualisation : ${previewUrl}`);
    }
    return { success: true, messageId: info.messageId, previewUrl };
  } catch (err) {
    console.error("Erreur lors de l'envoi de l'email :", err);
    return { success: false, error: err };
  }
}

if (process.argv[1] && process.argv[1].endsWith('email-sender.js')) {
  sendEmailDemo();
}
