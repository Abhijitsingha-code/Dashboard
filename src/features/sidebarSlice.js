import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    selectSidebar: false,
  },
  reducers: {
    onSidebarToogle: (state, action) => {
      state.selectSidebar = action.payload;
    },
  },
});

export const { onSidebarToogle } = sidebarSlice.actions;
export const selectSidebar = (state) => state.sidebar.selectSidebar;

export default sidebarSlice.reducer;
