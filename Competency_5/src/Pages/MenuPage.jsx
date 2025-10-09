import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import cheese from "../assets/images/cheese.jpeg";
import pepperoni from "../assets/images/pepperoni.jpeg";
import meatlover from "../assets/images/meatlover.jpeg";
import meatball from "../assets/images/meatball.jpeg";
import calzone from "../assets/images/calzone.jpeg";

const menuItems = [
    { image: cheese, name: "Cheese Pizza", description: "Traditional Cheese Pizza with fresh mozzarella and tomato sauce.", price: 12.99 },
    { image: pepperoni, name: "Pepperoni Pizza", description: "Classic Pepperoni Pizza with spicy pepperoni slices.", price: 14.99 },
    { image: meatlover, name: "Meat Lover's Pizza", description: "Loaded with pepperoni, sausage, ham, and bacon.", price: 16.99 },
    { image: meatball, name: "Meatball Sub", description: "Italian meatballs smothered in marinara and mozzarella on a toasted sub.", price: 9.99 },
    { image: calzone, name: "Calzone", description: "Folded pizza pocket with ricotta, mozzarella, and your choice of topping.", price: 10.99 },
];

const MenuPage = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-5" style={{ color: "#8B0000", fontWeight: "bold" }}>
                Our Menu
            </h1>
            <Row className="g-4">
                {menuItems.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card className="h-100 shadow-sm border-0">
                            <CardImg
                                top
                                width="100%"
                                src={item.image}
                                alt={item.name}
                                className="rounded-4"
                                style={{ maxHeight: "250px", objectFit: "cover" }}
                            />
                            <CardBody className="d-flex flex-column">
                                <CardTitle tag="h5" className="fw-bold">
                                    {item.name}
                                </CardTitle>
                                <CardText className="text-muted flex-grow-1">
                                    {item.description}
                                </CardText>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="fw-bold">${item.price.toFixed(2)}</span>
                                    <Button color="danger" size="sm">Order Now</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MenuPage;
