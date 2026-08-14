import { useState } from "react";
import type { Journal } from "../types/Journal.types";
import { Button, Container, Form } from "react-bootstrap";
import HorseInfoForm from "./HorseInfoForm";
import ExaminationForm from "./ExaminationForm";
import TreatmentForm from "./TreatmentForm";

type Section = "horse" | "owner";

function JournalForm() {

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

        visitDate: "",

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

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        console.log(journal);
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

                <Button type="submit">Spara Journal</Button>

            </Form>
        </Container>
    )

}

export default JournalForm;