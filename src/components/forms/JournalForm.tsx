import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";
import JournalPDF from "../pdf/JournalPDF";
import useJournal from "../../hooks/useJournal";
import usePDF from "../../hooks/usePDF";
import { useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";

//Typecoverage och lint
//Kolla netlify och resend
//Kolla hur deploya till netlify för varje kund själv?
//Ovan - sätt upp en deploy länk
//Skriv en snygg read me som är enkel för användare
//Avkommentera bilden och testa i deploy
//Städa till sist

function JournalForm() {

    const [isLoading, setIsLoading] = useState(false);

    const [modal, setModal] = useState({
        show: false,
        title: "",
        message: "",
        type: "confirm" as "confirm" | "info",
        onConfirm: () => { },
    });

    const { journal, updateField, updateDate, updateTextArea, newJournal } = useJournal();
    const { generatePDFBase64, downloadPDF } = usePDF();

    const showConfirm = (
        title: string,
        message: string,
        onConfirm: () => void
    ) => {
        setModal({
            show: true,
            title,
            message,
            type: "confirm",
            onConfirm: () => {
                onConfirm();
                setModal(prev => ({ ...prev, show: false }));
            }
        })
    };

    const showInfo = (title: string, message: string) => {
        setModal({
            show: true,
            title,
            message,
            type: "info",
            onConfirm: () => { }
        })
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const pdfBase64 = await generatePDFBase64();

            if (!pdfBase64) {
                showInfo("Fel", "Kunde inte skapa PDF");
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

            showInfo("Journal skickad", "Journal skickad med PDF");
        } catch (error) {
            console.error(error);
            showInfo("Fel", "Kunde inte skicka journalen")
        }

        setIsLoading(false);
    };

    return (
        <Container className="py-5 position-relative journalContainer">

            <h1 className="mb-4 journalTitle">Journal</h1>

            {isLoading && (
                <div className="loadingOverlay">
                    <div className="spinner-border" />
                </div>
            )}

            <Form onSubmit={handleSubmit} className={isLoading ? "formLoading" : ""}>

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

                <div className="journalBtnGroup">
                    <Button
                        type="button"
                        variant="none"
                        className="journalBtnSend"
                        onClick={() =>
                            showConfirm(
                                "Skicka journal",
                                "Vill du skicka journalen till kunden?",
                                handleSubmit
                            )
                        }>
                        Skicka Journal
                    </Button>

                    <Button
                        type="button"
                        variant="none"
                        className="journalBtnDownload"
                        onClick={() =>
                            showConfirm(
                                "Ladda ner PDF",
                                "Vill du ladda ner journalen som PDF?",
                                downloadPDF
                            )
                        }>
                        Ladda ner PDF
                    </Button>

                    <Button
                        variant="none"
                        className="journalBtnNew"
                        onClick={() =>
                            showConfirm(
                                "Ny journal",
                                "Vill du tömma och skapa en ny journal?",
                                newJournal
                            )
                        }>
                        Ny journal
                    </Button>
                </div>

            </Form>

            <div className="pdfContainer">
                <JournalPDF journal={journal} />
            </div>

            <ConfirmModal
                show={modal.show}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                onCancel={() => setModal(prev => ({ ...prev, show: false }))}
                onConfirm={modal.onConfirm}
            />
        </Container>
    )

}

export default JournalForm;