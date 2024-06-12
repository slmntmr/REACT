import React from "react";
import { Card, Nav } from "react-bootstrap";

const MainMenu = () => {
	return (
		<Card>
			<Card.Body>
				<Nav  className="flex-column">
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav>
			</Card.Body>
		</Card>
	);
};

export default MainMenu;
