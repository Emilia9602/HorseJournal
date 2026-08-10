import { Card, Col, Form, Row } from "react-bootstrap";
import type { Journal } from "../types/Journal.types"

type HorseInfoFormProps = {
    journal: Journal;
    updateField: (section: string, field: string, value: string) => void;
    updateTextArea: (area: string, value: string) => void;
};

function HorseInfoForm({ journal, updateField, updateTextArea }: HorseInfoFormProps) {
    return (
        <>
            <Card className="mb-4">
                <Card.Header>Häst</Card.Header>

                <Card.Body>
                    <Row>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Namn</Form.Label>
                                <Form.Control
                                    name="horseName"
                                    value={journal.horse.name}
                                    onChange={(e) => updateField("horse", "name", e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Ras</Form.Label>
                                <Form.Control
                                    name="breed"
                                    value={journal.horse.breed}
                                    onChange={(e) => updateField("horse", "breed", e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Född</Form.Label>
                                <Form.Control
                                    name="birthDate"
                                    value={journal.horse.birthDate}
                                    onChange={(e) => updateField("horse", "birthDate", e.target.value)}
                                />
                            </Form.Group>
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

                    <Form.Group className="mb-3">
                        <Form.Label>Namn</Form.Label>
                        <Form.Control
                            name="ownerName"
                            value={journal.owner.name}
                            onChange={(e) => updateField("owner", "name", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Adress</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="address"
                            value={journal.owner.address}
                            onChange={(e) => updateField("owner", "address", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Telefonnummer</Form.Label>
                        <Form.Control
                            name="phone"
                            value={journal.owner.phone}
                            onChange={(e) => updateField("owner", "phone", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mail</Form.Label>
                        <Form.Control
                            name="mail"
                            value={journal.owner.mail}
                            onChange={(e) => updateField("owner", "mail", e.target.value)}
                        />
                    </Form.Group>

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
                            onChange={(e) => updateTextArea("visitDate", e.target.value)}
                        />

                    </Form.Group>

                </Card.Body>

            </Card>
        </>
    )
}

export default HorseInfoForm;