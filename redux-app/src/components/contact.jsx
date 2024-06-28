import React from "react";
import { $t } from "../helpers/locale-helper";

const Contact = () => {
	return (
		<>
			<p>{$t("contact-highlight")}</p>
			<h2>{$t("contact-information")}</h2>
			<p>
				<strong>{$t("address")}:</strong> 123 TechVision Way, Innovation City,
				Techland 45678
			</p>
			<p>
				<strong>{$t("telephone")}:</strong> (123) 456-7890
			</p>
			<p>
				<strong>{$t("email")}:</strong>{" "}
				<a href="mailto:contact@techvision.com">
					contact@techvision.com
				</a>
			</p>
			<p>
				<strong>{$t("gsm")}:</strong> (098) 765-4321
			</p>
			<h2>{$t("follow-us")}</h2>
			<p>{$t("follow-us-text")}</p>
			<ul>
				<li>
					<a
						href="https://www.facebook.com/techvision"
						target="_blank"
					>
						Facebook
					</a>
				</li>
				<li>
					<a
						href="https://www.twitter.com/techvision"
						target="_blank"
					>
						Twitter
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/company/techvision"
						target="_blank"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/techvision"
						target="_blank"
					>
						Instagram
					</a>
				</li>
			</ul>
		</>
	);
};

export default Contact;
