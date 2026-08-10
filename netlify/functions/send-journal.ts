import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event) => {

    const { journal, pdf } = JSON.parse(event.body || "{}");

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "emiliaandreasson96@gmail.com",
            pass: "DIN_APP_PASSWORD", //Kolla detta sen
        }
    })

    const base64Data = pdf.split("base64,")[1];

    try {
        await transporter.sendMail({
            from: "emiliaandreasson96@gmail.com",
            to: journal.owner.mail
                ? [journal.owner.mail, "ellis-an@hotmail.com",]
                : ["ellis-an@hotmail.com"],

            subject: `Journal ${journal.horse.name}`,
            text: `
            Hej!
            
            Här är journalen för ${journal.horse.name}.
            Datum: ${journal.visitDate}
            
            Se bifogad PDF.
            
            `,

            attachments: [
                {
                    filename: "journal.pdf",
                    content: base64Data,
                    encoding: "base64",
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