import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RootLayout = () => {

	const mode = useSelector(state=> state.theme.mode);


	return (
		<div className={`d-flex flex-column gap-4 vh-100 ${mode}`}>
			<Header />
			<Container className="flex-grow-1">
				<Outlet />
			</Container>
			<Footer />
		</div>
	);
};

export default RootLayout;
