import React from "react";

const Style1 = () => {
	const isRadius = false;
	const padding = "10px";

	return (
		<div>
			<h1>STYLES</h1>

			<h2
				style={{
					color: "red",
					fontSize: "1.5rem",
					textShadow: "3px 3px 5px black",
					border: "1px solid gray",
					padding,
					borderRadius: isRadius ? "30px" : "0",
				}}
			>
				Inline style
			</h2>
		</div>
	);
};

export default Style1;
