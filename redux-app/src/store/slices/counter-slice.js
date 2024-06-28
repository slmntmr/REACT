import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		up: (state) => {
			state.value++;
		},
		down: (state) => {
			state.value--;
		},
		set: (state, action) => {
			state.value = action.payload;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { up, down, set, reset } = counterSlice.actions;
export default counterSlice.reducer;
