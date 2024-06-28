import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./auth/reducer";
import { userInitialState } from "./auth/initial-state";

// Bos bir merkezi state olusturuldu
const StoreContext = createContext();

// useStore isimli hook u olusturduk. Component icindeki merkezi state cagirma isini kolaylastirmak icin.
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
	const [stateUser, dispatchUser] = useReducer(userReducer, userInitialState);

	const state = { stateUser, dispatchUser };

	return (
		<StoreContext.Provider value={state}>{children}</StoreContext.Provider>
	);
};
