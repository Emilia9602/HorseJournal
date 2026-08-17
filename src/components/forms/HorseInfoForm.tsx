import { Card, Col, Form, Row } from "react-bootstrap";
import type { Journal, JournalSection } from "../../types/Journal.types"
import InputField from "../fields/InputField";
import TextAreaField from "../fields/TextAreaFields";

type HorseInfoFormProps = {
    journal: Journal;

    updateField: (
        section: JournalSection,
        field: keyof Journal["horse"] | keyof Journal["owner"],
        value: string
    ) => void;

    updateDate: (
        field: "visitDate",
        value: string,
    ) => void;
};

function HorseInfoForm({ journal, updateField, updateDate }: HorseInfoFormProps) {
    return (
        <>
            <Card className="mb-4">
                <Card.Header>Häst</Card.Header>

                <Card.Body>
                    <Row>

                        <Col md={6}>
                            <InputField
                                label="Namn"
                                value={journal.horse.name}
                                onChange={(value) => updateField("horse", "name", value)}
                            />
                        </Col>

                        <Col md={6}>
                            <InputField
                                label="Ras"
                                value={journal.horse.breed}
                                onChange={(value) => updateField("horse", "breed", value)}
                            />
                        </Col>

                        <Col md={4}>
                            <InputField
                                label="Född"
                                value={journal.horse.birthDate}
                                onChange={(value) => updateField("horse", "birthDate", value)}
                            />
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Kön</Form.Label>

                                <Form.Select
                                    name="gender"
                                    value={journal.horse.gender}
                                    onChange={(e) => updateField("horse", "gender", e.target.value)}
                                >
                                    <option value="">Välj</option>
                                    <option value="Sto">Sto</option>
                                    <option value="Hingst">Hingst</option>
                                    <option value="Valack">Valack</option>

                                </Form.Select>

                            </Form.Group>
                        </Col>

                    </Row>
                </Card.Body>
            </Card>

            <Card className="mb-4">

                <Card.Header>Ägare</Card.Header>

                <Card.Body>

                    <InputField
                        label="Namn"
                        value={journal.owner.name}
                        onChange={(value) => updateField("owner", "name", value)}
                    />

                    <TextAreaField
                        label="Adress"
                        rows={2}
                        value={journal.owner.address}
                        onChange={(value) => updateField("owner", "address", value)}
                    />

                    <InputField
                        label="Telefonnummer"
                        type="tel"
                        value={journal.owner.phone}
                        onChange={(value) => updateField("owner", "phone", value)}
                    />

                    <InputField
                        label="Mail"
                        type="email"
                        value={journal.owner.mail}
                        onChange={(value) => updateField("owner", "mail", value)}
                    />

                </Card.Body>

            </Card>

            <Card className="mb-4">

                <Card.Header>Besök</Card.Header>

                <Card.Body>

                    <Form.Group>

                        <Form.Label>Datum för besök</Form.Label>

                        <Form.Control
                            type="date"
                            name="visitDate"
                            value={journal.visitDate}
                            onChange={(e) => updateDate("visitDate", e.target.value)}
                        />

                    </Form.Group>

                </Card.Body>

            </Card>
        </>
    )
}

export default HorseInfoForm;