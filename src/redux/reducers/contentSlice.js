import {createSlice} from '@reduxjs/toolkit';

export const contentSlice = createSlice({
	name: 'content',
	initialState: {
		currentPage: 'start',
		slideIndex: 9,
		activeScreen: '',
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