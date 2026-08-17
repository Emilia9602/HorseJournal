import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";
import JournalPDF from "../pdf/JournalPDF";
import useJournal from "../../hooks/useJournal";
import usePDF from "../../hooks/usePDF";

//Lägg in snyggare än alerts
//LocalStorage? Ej ladda om ifall man går ut, så att det sparas
//Nödvändigt med både spara PDF och skicka PDF?
//Sortera komponenter till mappar
//Städa till sist

function JournalForm() {

    const { journal, updateField, updateDate, updateTextArea } = useJournal();
    const { generatePDFBase64, downloadPDF } = usePDF();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const pdfBase64 = await generatePDFBase64();

            if (!pdfBase64) {
                alert("Kunde inte skapa PDF");
                return;
            }

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

            if (!res.ok) throw new Error("Kunde inte skicka journalen");

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
                    updateDate={updateDate} />

                <ExaminationForm
                    journal={journal}
                    updateTextArea={updateTextArea} />

                <TreatmentForm
                    journal={journal}
                    updateTextArea={updateTextArea} />

                <Button type="submit" className="me-2">
                    Skicka Journal
                </Button>

                <Button variant="secondary"
                    onClick={downloadPDF}
                    className="ms-2">
                    Ladda ner PDF
                </Button>

            </Form>

            <div className="pdfContainer">
                <JournalPDF journal={journal} />
            </div>
        </Container>
    )

}

export default JournalForm;