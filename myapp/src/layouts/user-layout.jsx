import React from "react";
import Header from "../components/13-shop/header";
import Footer from "../components/13-shop/footer";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/00-common/main-menu";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
	return (
		<>
			<Header />
			<Container className="my-4">
				<Row>
					<Col md={4} lg={3}>
						<MainMenu />
					</Col>
					<Col md={8} lg={9}>
						<Outlet />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default UserLayout;
