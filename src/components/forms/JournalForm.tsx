import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";
import JournalPDF from "../pdf/JournalPDF";
import useJournal from "../../hooks/useJournal";
import usePDF from "../../hooks/usePDF";

//Lägg in snyggare än alerts
//Snyggare comfirm i useJournal för ny journal
//Fixa knapp för ny journal
//Gör knappar responsiva
//Laddning visa?
//Fråga om hon verkligen vill skicka journalen, ifall hon råkar trycka
//Error handling
//Kolla netlify och resend
//Sätta begräsning till större skärm?
//Kolla hur deploya till netlify för varje kund själv?
//Ovan - sätt upp en deploy länk
//Skriv en snygg read me som är enkel för användare
//Städa till sist

function JournalForm() {

    const { journal, updateField, updateDate, updateTextArea, newJournal } = useJournal();
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
        <Container className="py-5">

            <h1 className="mb-4 journalTitle">Journal</h1>

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

                <Button
                    type="submit"
                    variant="none"
                    className="me-3 journalBtnSend">
                    Skicka Journal
                </Button>

                <Button
                    variant="none"
                    onClick={downloadPDF}
                    className="ms-2 journalBtnDownload">
                    Ladda ner PDF
                </Button>

                <Button
                    onClick={newJournal}
                    variant="none"
                    className="me-3 mt-4 journalBtnNew">
                    Ny journal
                </Button>

            </Form>

            <div className="pdfContainer">
                <JournalPDF journal={journal} />
            </div>
        </Container>
    )

}

export default JournalForm;