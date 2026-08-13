import { Card, Form } from "react-bootstrap";
import type { Journal, TextArea } from "../types/Journal.types"

type TreatmentFormProps = {
    journal: Journal;
    updateTextArea: (area: TextArea, value: string) => void;
}

type AreaFields = {
    key: TextArea;
    label: string;
    rows: number;
};

const areaFields: AreaFields[] = [
    { key: "treatment", label: "Behandling", rows: 3 },
    { key: "homeAdvice", label: "Hemgångsråd", rows: 4 },
];

function TreatmentForm({ journal, updateTextArea }: TreatmentFormProps) {
    return (
        <Card className="mb-4">

            <Card.Header>Behandling</Card.Header>

            <Card.Body>
                {areaFields.map(({ key, label, rows }) => (
                    <Form.Group className="mb-3" key={key}>
                        <Form.Label>{label}</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={rows}
                            value={journal[key]}
                            onChange={(e) => updateTextArea(key, e.target.value)}
                        />

                    </Form.Group>
                ))}
            </Card.Body>

        </Card>
    )
}

export default TreatmentForm;