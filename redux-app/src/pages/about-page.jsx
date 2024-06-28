import React from "react";
import PageHeader from "../components/page-header";
import About from "../components/about";
import { $t } from "../helpers/locale-helper";

const AboutPage = () => {
	return (
		<>
			<PageHeader title={$t("about")} />
			<About />
		</>
	);
};

export default AboutPage;
