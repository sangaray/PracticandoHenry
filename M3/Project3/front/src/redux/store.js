import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import subjectSlice from "./subjectSlice";

const store = configureStore({
  reducer: {
    actualUser: userSlice,
    subjects: subjectSlice, // Agregar el slice de subjects
  },
});

export default store;
