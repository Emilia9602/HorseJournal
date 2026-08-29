import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";
import JournalPDF from "../pdf/JournalPDF";
import useJournal from "../../hooks/useJournal";
import usePDF from "../../hooks/usePDF";
import { useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";

//Lägg in snyggare än alerts
//Gör knappar responsiva
//Laddning visa?
//Gör mailet lite snyggare
//Error handling
//Kolla netlify och resend
//Sätta begräsning till större skärm?
//Kolla hur deploya till netlify för varje kund själv?
//Ovan - sätt upp en deploy länk
//Skriv en snygg read me som är enkel för användare
//Städa till sist

function JournalForm() {

    const [modal, setModal] = useState({
        show: false,
        title: "",
        message: "",
        onConfirm: () => { },
    });

    const { journal, updateField, updateDate, updateTextArea, newJournal } = useJournal();
    const { generatePDFBase64, downloadPDF } = usePDF();

    const handleSubmit = async () => {

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
                    type="button"
                    variant="none"
                    className="me-3 journalBtnSend"
                    onClick={() =>
                        setModal({
                            show: true,
                            title: "Skicka journal",
                            message: "Vill du skicka journalen till kunden?",
                            onConfirm: () => {
                                handleSubmit();
                                setModal(prev => ({ ...prev, show: false }));
                            },
                        })
                    }>
                    Skicka Journal
                </Button>

                <Button
                    type="button"
                    variant="none"
                    className="ms-2 journalBtnDownload"
                    onClick={() =>
                        setModal({
                            show: true,
                            title: "Ladda ner PDF",
                            message: "Vill du ladda ner journalen som PDF?",
                            onConfirm: () => {
                                downloadPDF();
                                setModal(prev => ({ ...prev, show: false }));
                            },
                        })
                    }>
                    Ladda ner PDF
                </Button>

                <Button
                    variant="none"
                    className="me-3 mt-4 journalBtnNew"
                    onClick={() =>
                        setModal({
                            show: true,
                            title: "Ny journal",
                            message: "Vill du tömma och skapa en ny journal?",
                            onConfirm: () => {
                                newJournal();
                                setModal(prev => ({ ...prev, show: false }));
                            },
                        })
                    }>
                    Ny journal
                </Button>

            </Form>

            <div className="pdfContainer">
                <JournalPDF journal={journal} />
            </div>

            <ConfirmModal
                show={modal.show}
                title={modal.title}
                message={modal.message}
                onCancel={() => setModal(prev => ({ ...prev, show: false }))}
                onConfirm={modal.onConfirm}
            />
        </Container>
    )

}

export default JournalForm;