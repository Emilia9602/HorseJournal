import { Card, Form } from "react-bootstrap";
import type { Journal, TextArea } from "../types/Journal.types"

type ExaminationFormProps = {
    journal: Journal;
    updateTextArea: (area: TextArea, value: string) => void;
};

const areaFields: { key: TextArea, label: string }[] = [
    { key: "anamnes", label: "Anamnes" },
    { key: "ocularInspection", label: "Ockulär besiktning" },
    { key: "fosa", label: "FOSA" },
    { key: "movementAnalysis", label: "Rörelseanalys" },
];

function ExaminationForm({ journal, updateTextArea }: ExaminationFormProps) {
    return (
        <Card className="mb-4">

            <Card.Header>Undersökning</Card.Header>

            <Card.Body>
                {areaFields.map(({ key, label }) => (
                    <Form.Group className="mb-3" key={key}>
                        <Form.Label>{label}</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={journal[key]}
                            onChange={(e) => updateTextArea(key, e.target.value)}
                        />

                    </Form.Group>
                ))}
            </Card.Body>

        </Card>
    )
}

export default ExaminationForm;