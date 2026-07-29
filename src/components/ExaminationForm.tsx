import { Card, Form } from "react-bootstrap";
import type { Journal } from "../types/Journal.types"

type ExaminationFormProps = {
    journal: Journal;
    updateTextArea: (area: string, value: string) => void;
};

function ExaminationForm({ journal, updateTextArea }: ExaminationFormProps) {
    return (
        <Card className="mb-4">

            <Card.Header>Undersökning</Card.Header>

            <Card.Body>

                <Form.Group className="mb-3">
                    <Form.Label>Anamnes</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="anamnes"
                        value={journal.anamnes}
                        onChange={(e) => updateTextArea("anamnes", e.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Ockulär besiktning</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="ocularInspection"
                        value={journal.ocularInspection}
                        onChange={(e) => updateTextArea("ocularInspection", e.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>FOSA</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="fosa"
                        value={journal.fosa}
                        onChange={(e) => updateTextArea("fosa", e.target.value)}
                    />

                </Form.Group>

                <Form.Group>

                    <Form.Label>Rörelseanalys</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="movementAnalysis"
                        value={journal.movementAnalysis}
                        onChange={(e) => updateTextArea("movementAnalysis", e.target.value)}
                    />

                </Form.Group>

            </Card.Body>

        </Card>
    )
}

export default ExaminationForm;