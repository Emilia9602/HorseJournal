import { useState } from "react";
import type { Journal } from "../types/Journal.types";
import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";
import html2pdf from "html2pdf.js";
import JournalPDF from "./JournalPDF";

type Section = "horse" | "owner";

//Lägg in snyggare än alerts
//LocalStorage? Ej ladda om ifall man går ut, så att det sparas

function JournalForm() {

    const today = new Date().toISOString().split("T")[0];

    const [journal, setJournal] = useState<Journal>({
        horse: {
            name: "",
            birthDate: "",
            gender: "",
            breed: "",
        },

        owner: {
            name: "",
            phone: "",
            address: "",
            mail: "",
        },

        visitDate: today,

        anamnes: "",
        ocularInspection: "",
        fosa: "",
        movementAnalysis: "",

        treatment: "",
        homeAdvice: "",
    });

    const updateField = (section: Section, field: string, value: string) => {
        setJournal((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const updateTextArea = (area: string, value: string) => {
        setJournal((prev) => ({
            ...prev,
            [area]: value,
        }));
    };

    const generatePDFBase64 = async (): Promise<string | null> => {
        const divPdf = document.getElementById("pdfJournal");

        if (!divPdf) return null;

        const opt = {
            margin: 0.5,
            filename: "journal.pdf",
            image: { type: "jpeg" as const, quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" as const },
        };

        const pdf = await html2pdf().set(opt).from(divPdf).outputPdf("blob");

        return await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(pdf);
            reader.onloadend = () => {
                resolve(reader.result as string);
            }
        })
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const pdfBase64 = await generatePDFBase64();

            const res = await fetch("/.netlify/functions/send-journal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    journal,
                    pdf: pdfBase64,
                }),
            });

            if (!res.ok) {
                throw new Error("Kunde inte skicka journalen");
            }

            alert("Journal skickad med PDF");
        } catch (error) {
            console.error(error);
            alert("Något gick fel");
        }
    };

    return (
        <Container className="py-4">

            <h1 className="mb-4">Journal</h1>

            <Form onSubmit={handleSubmit}>
                <HorseInfoForm
                    journal={journal}
                    updateField={updateField}
                    updateTextArea={updateTextArea} />

                <ExaminationForm
                    journal={journal}
                    updateTextArea={updateTextArea} />

                <TreatmentForm
                    journal={journal}
                    updateTextArea={updateTextArea} />

                <Button type="submit">Spara Journal</Button>
                <Button variant="secondary"
                    onClick={generatePDFBase64}
                    className="ms-2">
                    Ladda ner PDF
                </Button>

                <div className="hide">
                    <JournalPDF journal={journal} />
                </div>

            </Form>
        </Container>
    )

}

export default JournalForm;