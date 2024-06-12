import { useFormik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";

const Test = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, "Min 2 chars")
            .max(15, "Max 15 chars")
            .required("Required"),
        lastName: Yup.string().required("Required"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, "Only digits are allowed")
            .min(10, "Must be at least 10 digits")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Container className="mt-4">
            <Form onSubmit={formik.handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        name="firstName"
                        type="text"
                        placeholder=""
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        name="lastName"
                        type="text"
                        placeholder=""
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                        isValid={formik.touched.lastName && !formik.errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        type="text"
                        placeholder=""
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                        isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        required
                        type="text"
                        placeholder=""
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        isValid={formik.touched.email && !formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Send</Button>
            </Form>
        </Container>
    );
};

export default Test;
