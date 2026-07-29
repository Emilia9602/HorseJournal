import { Card, Form } from "react-bootstrap";
import type { Journal } from "../types/Journal.types"

type TreatmentFormProps = {
    journal: Journal;
    updateTextArea: (area: string, value: string) => void;
}

function TreatmentForm({ journal, updateTextArea }: TreatmentFormProps) {
    return (
        <Card className="mb-4">

            <Card.Header>Behandling</Card.Header>

            <Card.Body>

                <Form.Group className="mb-3">

                    <Form.Label>Behandling</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="treatment"
                        value={journal.treatment}
                        onChange={(e) => updateTextArea("treatment", e.target.value)}
                    />

                </Form.Group>

                <Form.Group>

                    <Form.Label>Hemgångsråd</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="homeAdvice"
                        value={journal.homeAdvice}
                        onChange={(e) => updateTextArea("homeAdvice", e.target.value)}
                    />

                </Form.Group>

            </Card.Body>

        </Card>
    )
}

export default TreatmentForm;