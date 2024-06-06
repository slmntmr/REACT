import React from "react";

const Jsx7 = () => {
	// Map methodunun for dongusu gibi kullanimi
	const arr = [...new Array(10)];

	return (
		<ul>
			{arr.map((_, index) => (
				<li key={index}>Product {index + 1}</li>
			))}
		</ul>
	);
};

export default Jsx7;
