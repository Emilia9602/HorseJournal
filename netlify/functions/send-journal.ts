import { Handler } from "@netlify/functions";
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
                ? [journal.owner.mail, "ellis-an@hotmail.com",] //Ellans mail sen
                : ["ellis-an@hotmail.com"],

            subject: `Journal ${journal.horse.name}`,
            html: `
            <h2>Journal för ${journal.horse.name}.</h2> 
            <p><strong>Datum:</strong> ${journal.visitDate}</p>
            <p>Se bifogad PDF.</p>
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