import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./reducers/contentSlice";
// import contentSlice from "./reducers/contentSlice";

export default configureStore({
	reducer: {
		// counter: contentSlice,
		content: contentReducer,
	},
});