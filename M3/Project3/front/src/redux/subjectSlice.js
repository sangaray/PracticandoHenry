import { createSlice } from "@reduxjs/toolkit";
import subjectData from "../helpers/subjectData"; // Importar los datos iniciales
// console.log("Datos iniciales en subjectSlice:", subjectData);

const subjectSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: subjectData, // Cargar los datos iniciales desde subjectData.js
  },
  reducers: {
    // Reducer vacío por ahora, pero puedes agregar acciones si necesitas modificar los subjects
  },
});

// Selector para obtener los subjects desde el estado global
export const selectSubjects = (state) => state.subjects.subjects;

export default subjectSlice.reducer;
