import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {

    const { journal, pdf } = JSON.parse(event.body || "{}");

    if (!pdf) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Ingen PDF skickades med" }),
        };
    }

    const base64Data = pdf.split("base64,")[1];

    try {
        await resend.emails.send({
            from: "Goldie Ranch <onboarding@resend.dev>", //GoldieRanch?
            to: journal.owner.mail
                ? [journal.owner.mail, "emiliaandreasson96@gmail.com",] //Ellans mail sen
                : ["emiliaandreasson96@gmail.com"],

            subject: `Journal ${journal.horse.name}`,
            html: `
            <div style="background:#f9f5ec; padding:40px 0; font-family: Arial, sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border:1px solid #dbc499; border-radius:10px; overflow:hidden;">
                            
                                <tr>
                                    <td style="padding:30px; text-align:center;">
                                    
                                    <!--
                                    <img 
                                        src="https://goldieranchjournal.netlify.app/images/logo.png" 
                                        alt="Bild av Goldie Ranch logga"
                                        width="120"
                                        style="display:block; margin:0 auto 15px auto;"
                                    />
                                    -->

                                    <h1 style="margin:0; font-size:20px; letter-spacing:3px; color:#4a3b1d;">
                                        JOURNAL
                                    </h1>

                                    <div style="width:100px; height:2px; margin:12px auto 0; background:linear-gradient(90deg,#f5ebd8,#dbc499);"></div>

                                    </td>
                                </tr>

                            <tr>
                                <td>
                                <hr style="border:none; height:1px; background:#eee; margin:0;">
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:30px; color:#1a1a1a; font-size:14px; line-height:1.6;">
                                
                                <p style="margin:0 0 10px;">
                                    Hej,
                                </p>

                                <p style="margin:0 0 20px;">
                                    Här kommer journalen för <strong>${journal.horse.name}</strong>.
                                </p>

                                <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffaf3; border:1px solid #dbc499; border-radius:6px; margin-bottom:20px;">
                                    <tr>
                                        <td style="padding:12px;">

                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding:4px 0; color:#6b5a2b; white-space:nowrap;">Häst:</td>
                                                        <td style="padding:4px 0; padding-left:10px;"><strong>${journal.horse.name}</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:4px 0; color:#6b5a2b; white-space:nowrap;">Datum:</td>
                                                        <td style="padding:4px 0; padding-left:10px;"><strong>${journal.visitDate}</strong></td>
                                                    </tr>
                                            </table>

                                        </td>
                                    </tr>
                                </table>

                                <hr style="border:none; height:1px; background:#eee; margin:20px 0;">

                                <p style="margin:0 0 20px;">
                                    Du hittar hela journalen som bifogad PDF.
                                </p>

                                <div style="margin:0;">
                                    <p style="margin:0;">Med Vänlig Hälsning,</p>
                                    <p style="margin:0; color:#4a3b1d; font-weight:bold;">Goldie Ranch,</p>
                                    <p style="margin:0;">Ellinor Andreasson</p>
                                </div>

                                </td>
                            </tr>

                            <tr>
                                <td style="padding:20px; font-size:12px; color:#6b5a2b; border-top:1px solid #eee; text-align:center;">
                                    <p style="margin:0 0 6px;">Kontakt: goldieranch@gmail.com</p>
                                    <p style="margin:0;">0738-549555</p>
                                </td>
                            </tr>

                            </table>

                        </td>
                    </tr>
                </table>
            </div>
            `,

            attachments: [
                {
                    filename: "journal.pdf",
                    content: base64Data,
                },
            ],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Mail skickat" }),
        };

    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Mail misslyckades" }),
        };
    }
};