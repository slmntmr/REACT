import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { langs, setCurrentLang } from "../helpers/locale-helper";

const LangSwitcher = () => {
	const mode = useSelector((state) => state.theme.mode);
	const lang = useSelector((state) => state.locale.lang);

	return (
		<Dropdown>
			<Dropdown.Toggle variant={mode} id="dropdown-basic">
				<span className={`fi fi-${lang.country}`}></span> {lang.title}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{langs.map((item) => (
					<Dropdown.Item
						key={item.code}
						onClick={() => setCurrentLang(item)}
					>
						<span className={`fi fi-${item.country}`}></span>{" "}
						{item.title}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default LangSwitcher;
