import React from "react";
import PageHeader from "../components/page-header";
import Contact from "../components/contact";
import { $t } from "../helpers/locale-helper";

const ContactPage = () => {
	return (
		<>
			<PageHeader title={$t("contact")} />
			<Contact/>
		</>
	);
};

export default ContactPage;
