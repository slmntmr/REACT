import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

const UseRef = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		const input = inputRef.current;
		input.focus();
		input.style.borderColor = "blue";
	}, []);

	return (
		<Container className="mt-4">
			<FormControl ref={inputRef} placeholder="Type something..." />
		</Container>
	);
};

export default UseRef;
