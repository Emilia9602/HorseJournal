import { Card } from "react-bootstrap";
import type { AreaField, Journal, TextArea } from "../../types/Journal.types"
import TextAreaField from "../fields/TextAreaFields";

type TreatmentFormProps = {
    journal: Journal;
    updateTextArea: (area: TextArea, value: string) => void;
}

const areaFields: AreaField[] = [
    { key: "treatment", label: "Behandling", rows: 3 },
    { key: "homeAdvice", label: "Hemgångsråd", rows: 4 },
];

function TreatmentForm({ journal, updateTextArea }: TreatmentFormProps) {
    return (
        <Card className="mb-4 formCard">

            <Card.Header className="formHeader">Behandling</Card.Header>

            <Card.Body className="formBody">
                {areaFields.map(({ key, label, rows }) => (
                    <TextAreaField
                        key={key}
                        label={label}
                        rows={rows}
                        value={journal[key]}
                        onChange={(value) => updateTextArea(key, value)}
                    />
                ))}
            </Card.Body>

        </Card>
    )
}

export default TreatmentForm;