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
                <div style="background-color: #09090b; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; line-height: 1.5;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #18181b; border-radius: 12px; border: 1px solid #27272a; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                        
                        <!-- Header -->
                        <div style="background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%); padding: 30px 20px; text-align: center;">
                            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: 0.5px; text-transform: uppercase;">Nouvelle Demande</h1>
                        </div>

                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            
                            <!-- Contact Info -->
                            <div style="margin-bottom: 30px;">
                                <p style="color: #a1a1aa; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Client</p>
                                <h2 style="margin: 0 0 5px 0; font-size: 20px; color: #ffffff; font-weight: 600;">${fullName}</h2>
                                <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none; font-size: 16px; display: block; margin-bottom: 5px;">${email}</a>
                                <p style="margin: 0; color: #d4d4d8; font-size: 14px;">${phone || 'Non renseigné'}</p>
                            </div>

                            <div style="height: 1px; background-color: #27272a; margin: 30px 0;"></div>

                            <!-- Project Info -->
                            <div style="margin-bottom: 20px;">
                                <p style="color: #a1a1aa; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Projet</p>
                                <h3 style="margin: 0; font-size: 18px; color: #ffffff; font-weight: 500;">
                                    ${projectType} ${projectType === 'autre' ? `<span style="color: #71717a;">(${projectTypeOther})</span>` : ''}
                                </h3>
                            </div>

                            <!-- Message -->
                            <div>
                                <p style="color: #a1a1aa; font-size: 12px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                                <div style="background-color: #27272a; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                                    <p style="margin: 0; color: #e4e4e7; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${message}</p>
                                </div>
                            </div>

                        </div>

                        <!-- Footer -->
                        <div style="background-color: #121215; padding: 20px; text-align: center; border-top: 1px solid #27272a;">
                            <p style="margin: 0; color: #52525b; font-size: 12px;">
                                Envoyé via <strong>iney.ma</strong>
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Envoi de l'email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Server response: %s', info.response);

        return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });

    } catch (error) {
        console.error('Erreur détaillée lors de l\'envoi:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        );
    }
}
