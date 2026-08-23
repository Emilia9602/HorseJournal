import { Card, Col, Form, Row } from "react-bootstrap";
import type { Journal, JournalSection } from "../../types/Journal.types"
import InputField from "../fields/InputField";
import TextAreaField from "../fields/TextAreaFields";

type HorseInfoFormProps = {
    journal: Journal;

    updateField: <T extends JournalSection>(
        section: T,
        field: keyof Journal[T],
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
            <Card className="mb-4 formCard">
                <Card.Header className="formHeader">Häst</Card.Header>

                <Card.Body className="formBody">
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
                                <Form.Label className="formLabel">Kön</Form.Label>

                                <Form.Select
                                    className="formInput"
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

            <Card className="mb-4 formCard">

                <Card.Header className="formHeader">Ägare</Card.Header>

                <Card.Body className="formBody">

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

            <Card className="mb-4 formCard">

                <Card.Header className="formHeader">Besök</Card.Header>

                <Card.Body className="formBody">

                    <Form.Group>

                        <Form.Label className="formLabel">Datum för besök</Form.Label>

                        <Form.Control
                            className="formInput"
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