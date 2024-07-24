import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
	name: 'content',
	initialState: {
		currentPage: 0,
		slideIndex: 'nine',
	},
	reducers: {
		setSlideIndex: (state, action) => {
			state.slideIndex = action.payload;
		}
	},
})

export const { setSlideIndex } = contentSlice.actions

export default contentSlice.reducer;