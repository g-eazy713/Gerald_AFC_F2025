import React, { useState } from "react";
import {
    Button,
    Col,
    FormFeedback,
    FormGroup,
    Input,
    Label,
    Row,
    Form
} from "reactstrap";

function HiringForm() {
    const [formData, setFormData] = useState({
        Fname: "",
        Lname: "",
        Address1: "",
        Address2: "",
        City: "",
        State: "",
        Age: 21,
        phone: "",
        email: "",
        password: "",
        maritalStatus: "Single"
    });

    const [errors, setErrors] = useState({});

    // Field validation logic
    const validateField = (name, value) => {
        switch (name) {
            case "Fname":
                if (!value) return "First name is required (1-20 characters).";
                if (value.length > 20) return "First name must be <= 20 characters.";
                return "";
            case "Address1":
                if (!value) return "Address is required.";
                return "";
            case "City":
                if (!value) return "City is required.";
                return "";
            case "State":
                if (!value) return "State is required.";
                return "";
            case "Age":
                if (!value || value < 21) return "Age must be 21 or older.";
                if (value > 99) return "Age must be less than 100.";
                return "";
            case "phone":
                if (!/^\d{3}-\d{3}-\d{4}$/.test(value))
                    return "Phone number must be ###-###-####.";
                return "";
            case "email":
                if (!value) return "Email is required.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format.";
                return "";
            case "password":
                if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,12}$/.test(value)
                )
                    return "Password must be 8-12 chars with uppercase, lowercase, number, and special char.";
                return "";
            default:
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({ ...formData, [name]: value });

        // Validate field in real-time
        const errorMsg = validateField(name, value);
        setErrors({ ...errors, [name]: errorMsg });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submit
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log("Form data submitted:", formData); // <-- log object here
        alert("Form submitted successfully!");
        handleReset();
    };


    const handleReset = () => {
        setFormData({
            Fname: "",
            Lname: "",
            Address1: "",
            Address2: "",
            City: "",
            State: "",
            Age: 21,
            phone: "",
            email: "",
            password: "",
            maritalStatus: "Single"
        });
        setErrors({});
    };

    return (
        <>
            <h1>Hiring Page</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Fname">First Name</Label>
                            <Input
                                id="Fname"
                                name="Fname"
                                type="text"
                                placeholder="Enter First Name"
                                value={formData.Fname}
                                onChange={handleChange}
                                invalid={!!errors.Fname}
                                maxLength={20}
                                required
                            />
                            {errors.Fname && <FormFeedback>{errors.Fname}</FormFeedback>}
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="Lname">Last Name</Label>
                            <Input
                                id="Lname"
                                name="Lname"
                                type="text"
                                placeholder="(Optional)"
                                value={formData.Lname}
                                onChange={handleChange}
                                maxLength={20}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Address1">Address</Label>
                            <Input
                                id="Address1"
                                name="Address1"
                                type="text"
                                placeholder="123 Main Address"
                                value={formData.Address1}
                                onChange={handleChange}
                                invalid={!!errors.Address1}
                                required
                            />
                            {errors.Address1 && <FormFeedback>{errors.Address1}</FormFeedback>}
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="Address2">Address 2</Label>
                            <Input
                                id="Address2"
                                name="Address2"
                                type="text"
                                placeholder="Optional"
                                value={formData.Address2}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="City">City</Label>
                            <Input
                                id="City"
                                name="City"
                                type="text"
                                value={formData.City}
                                onChange={handleChange}
                                invalid={!!errors.City}
                                required
                            />
                            {errors.City && <FormFeedback>{errors.City}</FormFeedback>}
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="State">State</Label>
                            <Input
                                id="State"
                                name="State"
                                type="select"
                                value={formData.State}
                                onChange={handleChange}
                                invalid={!!errors.State}
                                required
                            >
                                <option value="">Select State</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="TX">TX</option>
                            </Input>
                            {errors.State && <FormFeedback>{errors.State}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Age">Age</Label>
                            <Input
                                id="Age"
                                name="Age"
                                type="number"
                                value={formData.Age}
                                min={21}
                                max={99}
                                onChange={handleChange}
                                invalid={!!errors.Age}
                                required
                            />
                            {errors.Age && <FormFeedback>{errors.Age}</FormFeedback>}
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="###-###-####"
                                value={formData.phone}
                                onChange={handleChange}
                                invalid={!!errors.phone}
                                maxLength={12}
                                required
                            />
                            {errors.phone && <FormFeedback>{errors.phone}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                invalid={!!errors.email}
                                required
                            />
                            {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                invalid={!!errors.password}
                                required
                            />
                            {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup tag="fieldset">
                    <legend>Marital Status</legend>
                    <FormGroup check>
                        <Input
                            type="radio"
                            name="maritalStatus"
                            value="Married"
                            checked={formData.maritalStatus === "Married"}
                            onChange={handleChange}
                        />{" "}
                        <Label check>Married</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            type="radio"
                            name="maritalStatus"
                            value="Single"
                            checked={formData.maritalStatus === "Single"}
                            onChange={handleChange}
                        />{" "}
                        <Label check>Single</Label>
                    </FormGroup>
                </FormGroup>

                <Button color="primary" type="submit">
                    Submit
                </Button>{" "}
                <Button color="secondary" type="button" onClick={handleReset}>
                    Reset
                </Button>
            </Form>
        </>
    );
}

export default HiringForm;
