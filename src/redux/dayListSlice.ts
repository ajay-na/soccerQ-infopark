import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

const days = async (): Promise<any[]> => {
  try {
    const data = await fetch(BASE_URL + "matches?distinct=1");
    const days = await data.json();
    return days[0];
  } catch (error) {
    console.log("it errorrrrrrrrr");
    console.log(error);
    return [];
  }
};

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
