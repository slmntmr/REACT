let langFile = (await import("./langs/en.json")).default;

import { store } from "../store";
import { setLang } from "../store/slices/locale-slice";

export const langs = [
	{ title: "English", code: "en", country: "gb" },
	{ title: "Türkçe", code: "tr", country: "tr" },
	{ title: "Français", code: "fr", country: "fr" },
	{ title: "Espanol", code: "es", country: "es" },
	{ title: "Portugues", code: "pt", country: "pt" },
	{ title: "Deutsh", code: "de", country: "de" },
	{ title: "Italiano", code: "it", country: "it" },
];

export const setCurrentLang = async (lang) => {
	langFile = (await import(`./langs/${lang.code}.json`)).default;
	store.dispatch(setLang(lang));

	console.log(langFile)

};

export const $t = (key) => {
	return langFile[key];
};
