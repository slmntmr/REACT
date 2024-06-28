import React from "react";
import Counter from "./counter";
import { $t } from "../helpers/locale-helper";

const About = () => {
	return (
		<>
			<p>{$t("about-highlight-text")}</p>

			<Counter />

			<h2>{$t("who-we-are-title")}</h2>
			<p>{$t("who-we-are-text")}</p>

			<h2>{$t("our-values-title")}</h2>
			<ul>
				<li>
					<b>{$t("innovation-title")}: </b>
					{$t("innovation-text")}
				</li>

				<li>
					<b>{$t("integrity-title")}: </b>
					{$t("integrity-text")}
				</li>

				<li>
					<b>{$t("excellence-title")}: </b>
					{$t("excellence-text")}
				</li>

				<li>
					<b>{$t("collaboration-title")}: </b>
					{$t("collaboration-text")}
				</li>
			</ul>
		</>
	);
};

export default About;
