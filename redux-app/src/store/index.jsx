import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import themeReducer from "./slices/theme-slice";
import localeReducer from "./slices/locale-slice";
import { Provider } from "react-redux";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
		locale: localeReducer
	},
});

export const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
