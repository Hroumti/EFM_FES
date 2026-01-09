import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import etudiantsReducer from "./sliceEtudiants";

const store = configureStore({
    reducer: {
        students: studentReducer,
        etudiants: etudiantsReducer
    }
})

export default store;