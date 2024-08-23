import {configureStore} from '@reduxjs/toolkit';
import contentReducer from './reducers/contentSlice';

export default configureStore({
	reducer: {
		content: contentReducer,
	},
});