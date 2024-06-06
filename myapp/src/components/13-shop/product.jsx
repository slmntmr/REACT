import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (props) => {
	const { title, image, desc, price } = props;

	return (
		<Card className="text-center">
			<Card.Img variant="top" src={`img/${image}`} />
			<Card.Body>
				<Card.Title className="my-2">{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Subtitle className="my-2">${price}</Card.Subtitle>
				<Button variant="warning">Add to cart</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
