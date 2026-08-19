import { Card } from "react-bootstrap";
import type { AreaField, Journal, TextArea } from "../../types/Journal.types"
import TextAreaField from "../fields/TextAreaFields";

type ExaminationFormProps = {
    journal: Journal;
    updateTextArea: (area: TextArea, value: string) => void;
};

const areaFields: AreaField[] = [
    { key: "anamnes", label: "Anamnes" },
    { key: "ocularInspection", label: "Ockulär besiktning" },
    { key: "fosa", label: "FOSA" },
    { key: "movementAnalysis", label: "Rörelseanalys" },
];

function ExaminationForm({ journal, updateTextArea }: ExaminationFormProps) {
    return (
        <Card className="mb-4 formCard">

            <Card.Header className="formHeader">Undersökning</Card.Header>

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

export default ExaminationForm;