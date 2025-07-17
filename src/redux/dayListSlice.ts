import { createSlice } from "@reduxjs/toolkit";

export const dayListSlice = createSlice({
  name: "dayList",
  initialState: { day: null },
  reducers: {
    updateDay: (state, actions) => {
      state.day = actions.payload;
    },
  },
});

export const { updateDay } = dayListSlice.actions;
export default dayListSlice.reducer;
