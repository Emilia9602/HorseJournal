import { useState } from "react";
import type { Journal } from "../types/Journal.types";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";


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
        },

        visitDate: "",

        anamnes: "",
        ocularInspection: "",
        fosa: "",
        movementAnalysis: "",

        treatment: "",
        homeAdvice: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setJournal({
            ...journal,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        console.log(journal);
    };

    return (
        <Container className="py-4">

            <h1 className="mb-4">
                Journal
            </h1>

            <Form onSubmit={handleSubmit}>

                <Card className="mb-4">
                    <Card.Header>
                        Hästinformation
                    </Card.Header>

                    <Card.Body>
                        <Row>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Namn</Form.Label>
                                    <Form.Control
                                        name="horseName"
                                        value={journal.horse.name}
                                        onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Ras</Form.Label>
                                    <Form.Control
                                        name="breed"
                                        value={journal.horse.breed}
                                        onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Född</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="birthDate"
                                        value={journal.horse.birthDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kön</Form.Label>

                                    <Form.Select
                                        name="gender"
                                        value={journal.horse.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Välj
                                        </option>
                                        <option value="Sto">
                                            Sto
                                        </option>
                                        <option value="Hingst">
                                            Hingst
                                        </option>
                                        <option value="Valack">
                                            Valack
                                        </option>

                                    </Form.Select>

                                </Form.Group>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>

                <Card className="mb-4">

                    <Card.Header>
                        Ägare
                    </Card.Header>

                    <Card.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Namn</Form.Label>
                            <Form.Control
                                name="ownerName"
                                value={journal.owner.name}
                                onChange={handleChange}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Telefonnummer</Form.Label>
                            <Form.Control
                                name="phone"
                                value={journal.owner.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Adress</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="address"
                                value={journal.owner.address}
                                onChange={handleChange}
                            />
                        </Form.Group>


                    </Card.Body>

                </Card>

                <Card className="mb-4">

                    <Card.Header>
                        Besök
                    </Card.Header>

                    <Card.Body>

                        <Form.Group>

                            <Form.Label>
                                Datum för besök
                            </Form.Label>

                            <Form.Control
                                type="date"
                                name="visitDate"
                                value={journal.visitDate}
                                onChange={handleChange}
                            />

                        </Form.Group>

                    </Card.Body>

                </Card>

                <Card className="mb-4">

                    <Card.Header>
                        Undersökning
                    </Card.Header>

                    <Card.Body>


                        <Form.Group className="mb-3">
                            <Form.Label>
                                Anamnes
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="anamnes"
                                value={journal.anamnes}
                                onChange={handleChange}
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                Ockulär besiktning
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="ocularInspection"
                                value={journal.ocularInspection}
                                onChange={handleChange}
                            />

                        </Form.Group>



                        <Form.Group className="mb-3">

                            <Form.Label>
                                FOSA
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="fosa"
                                value={journal.fosa}
                                onChange={handleChange}
                            />

                        </Form.Group>



                        <Form.Group>

                            <Form.Label>
                                Rörelseanalys
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="movementAnalysis"
                                value={journal.movementAnalysis}
                                onChange={handleChange}
                            />

                        </Form.Group>


                    </Card.Body>

                </Card>

                <Card className="mb-4">

                    <Card.Header>
                        Behandling
                    </Card.Header>


                    <Card.Body>

                        <Form.Group className="mb-3">

                            <Form.Label>
                                Behandling
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="treatment"
                                value={journal.treatment}
                                onChange={handleChange}
                            />

                        </Form.Group>


                        <Form.Group>

                            <Form.Label>
                                Hemgångsråd
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="homeAdvice"
                                value={journal.homeAdvice}
                                onChange={handleChange}
                            />

                        </Form.Group>


                    </Card.Body>

                </Card>

                <Button type="submit">
                    Spara Journal
                </Button>

            </Form>
        </Container>
    )

}

export default JournalForm;