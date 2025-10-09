import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import HiringForm from "../Components/HiringForm.jsx";

const HiringPage = () => {
    return (
        <div className="hiring-page">
            <Container className="my-5">
                <Row className="justify-content-center mb-4">
                    <Col md={8} className="text-center">
                        <h1 style={{ color: "#8B0000", fontWeight: "bold" }}>Join Our Team</h1>
                        <p className="text-muted">
                            We are looking for passionate individuals to join Pizza Bros!
                            Fill out the form below to apply. Make sure all information is accurate.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="shadow-sm border-5 rounded-4">
                            <CardBody className="p-4">
                                <HiringForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HiringPage;
