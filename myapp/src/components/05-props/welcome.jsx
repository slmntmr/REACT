import React from "react";

const Welcome = (props) => {
	console.log(props);

	return (
		<div style={{ color: props.textColor }}>
			<h2>
				Welcome {props.firstName} {props.lastName}
			</h2>
		</div>
	);
};

export default Welcome;
