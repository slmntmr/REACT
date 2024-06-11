import { useFormik } from "formik";
import React from "react";
import { Button, Card, FloatingLabel, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const NewProductForm = () => {
	const initialValues = {
		title: "",
		price: "",
		category: "",
		discounted: false,
	};

	const validationSchema = Yup.object({
		title: Yup.string().max(50, "Too long").required("Required"),
		price: Yup.number()
			.typeError("Invalid")
			.min(0, "Cannot be negative")
			.required("Required"),
		category: Yup.string().max(70, "Too long").required("Required"),
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const isInvalid = (field) => {
		const res = formik.touched[field] && !!formik.errors[field];
		return res;
	};

	return (
		<Card>
			<Card.Body>
				<Form noValidate onSubmit={formik.handleSubmit}>
					<FloatingLabel
						controlId="title"
						label="Title"
						className="mb-3"
					>
						<Form.Control
							type="text"
							placeholder=""
							{...formik.getFieldProps("title")}
							isInvalid={isInvalid("title")}
						/>
						<Form.Control.Feedback type="invalid">
							{formik.errors.title}
						</Form.Control.Feedback>
					</FloatingLabel>

					<FloatingLabel
						controlId="price"
						label="Price"
						className="mb-3"
					>
						<Form.Control
							type="number"
							placeholder=""
							{...formik.getFieldProps("price")}
							isInvalid={isInvalid("price")}
						/>
						<Form.Control.Feedback type="invalid">
							{formik.errors.price}
						</Form.Control.Feedback>
					</FloatingLabel>

					<FloatingLabel
						controlId="category"
						label="Category"
						className="mb-3"
					>
						<Form.Select
							aria-label="Select category"
							{...formik.getFieldProps("category")}
							isInvalid={isInvalid("category")}
						>
							<option value="">Select</option>
							<option value="computer">Computer</option>
							<option value="monitor">Monitor</option>
							<option value="keyboard">Keyboard</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid">
							{formik.errors.category}
						</Form.Control.Feedback>
					</FloatingLabel>

					<Form.Check // prettier-ignore
						type="checkbox"
						id="discounted"
						label="Discounted"
						className="mb-3"
						{...formik.getFieldProps("discounted")}
					/>

					<Button
						type="submit"
						disabled={
							formik.isSubmitting ||
							!(formik.dirty && formik.isValid)
						}
					>
						{formik.isSubmitting ? <Spinner size="sm" /> : "Create"}
					</Button>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default NewProductForm;
