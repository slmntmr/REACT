import React from "react";
import { FormCheck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../store/slices/theme-slice";
import { $t } from "../helpers/locale-helper";

const ThemeSwitcher = () => {
	const mode = useSelector((state) => state.theme.mode);
	const dispatch = useDispatch();

	const handleChange = () => {
		const newMode = mode === "dark" ? "light" : "dark";
		dispatch(setMode(newMode));
	};

	return (
		<FormCheck // prettier-ignore
			type="switch"
			id="themeSwitcher"
			label={mode === "dark" ? $t("light") : $t("dark")}
			onChange={handleChange}
		/>
	);
};

export default ThemeSwitcher;
