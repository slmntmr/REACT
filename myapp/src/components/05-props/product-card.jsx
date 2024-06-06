import React from "react";
import "./product-card.scss";

const ProductCard = (props) => {
	return (
		<div className="product-card">
			<h3>{props.title}</h3>
			<p>{props.children}</p>
			<h5>{props.price}</h5>
		</div>
	);
};

export default ProductCard;
