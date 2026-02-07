import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, phone, projectType, projectTypeOther, message } = body;

        // Validation basique
        if (!fullName || !email || !projectType || !message) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants' },
                { status: 400 }
            );
        }

        // Configuration du transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true pour le port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Contenu de l'email
        const mailOptions = {
            from: `"Site Web INEY" <${process.env.SMTP_USER}>`,
            to: 'contact@iney.ma', // L'adresse qui reçoit les demandes
            replyTo: email,
            subject: `Nouvelle demande de projet : ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6D28D9;">Nouvelle demande de contact</h2>
                    <p><strong>De :</strong> ${fullName} (<a href="mailto:${email}">${email}</a>)</p>
                    <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
                    
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    
                    <p><strong>Type de projet :</strong> ${projectType} ${projectType === 'autre' ? `(${projectTypeOther})` : ''}</p>
                    
                    <h3>Message :</h3>
                    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
                    
                    <hr style="border: 1px solid #eee; margin: 20px 0;" />
                    
                    <p style="font-size: 12px; color: #888;">Cet email a été envoyé depuis le formulaire de contact de iney.ma</p>
                </div>
            `,
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        );
    }
}
