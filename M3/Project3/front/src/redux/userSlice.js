import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { login: false, user: {} },
  userAppointments: [],
};

const userSlice = createSlice({
  name: "actualUser",
  initialState: initialState,
  reducers: {
    // Métodos => redtucer/action
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

console.log(userSlice);

export const { setUserData, setUserAppointments } = userSlice.actions;

export default userSlice.reducer;
