import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
	name: 'content',
	initialState: {
		currentPage: 0,
		slideIndex: 'nine',
		activeScreen: '',
	},
	reducers: {
		setSlideIndex: (state, action) => {
			state.slideIndex = action.payload;
		},
		setActiveScreen: (state, action) => {
			state.activeScreen = action.payload;
		}
	},
})

export const { setSlideIndex, setActiveScreen } = contentSlice.actions

export default contentSlice.reducer;