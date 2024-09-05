import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
	name: 'content',
	initialState: {
		slideIndex: 9,
		activeScreen: '',
		currentPage: 'start',
	},
	reducers: {
		setSlideIndex: (state, action) => {
			state.slideIndex = action.payload;
		},
		setActiveScreen: (state, action) => {
			state.activeScreen = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
})

export const {
	setSlideIndex,
	setActiveScreen,
	setCurrentPage
} = contentSlice.actions

export default contentSlice.reducer;