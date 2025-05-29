import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen } = uiSlice.actions;
export default uiSlice.reducer;
