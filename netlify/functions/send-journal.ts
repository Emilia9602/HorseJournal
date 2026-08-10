import { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {

    const { journal, pdf } = JSON.parse(event.body || "{}");

    //Avinstallera nodemailer?
    //env osynlig?

    const base64Data = pdf.split("base64,")[1];

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev", //GoldieRanch?
            to: journal.owner.mail
                ? [journal.owner.mail, "ellis-an@hotmail.com",]
                : ["ellis-an@hotmail.com"],

            subject: `Journal ${journal.horse.name}`,
            html: `
            <p>
              Hej!
            
              Här är journalen för ${journal.horse.name}.
              Datum: ${journal.visitDate}
            
              Se bifogad PDF.
            </p>
            
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