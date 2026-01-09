import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentList: []
}

const StudentSlice = createSlice({
    name: "Students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.studentList.push({ id: Date.now(), ...action.payload })
        },
        editStudent: (state, action) => {
            const index = state.studentList.findIndex(s => s.id === action.payload.id)
            if (index !== -1) {
                state.studentList[index] = action.payload
            }
        },
        removeStudent: (state, action) => {
            state.studentList = state.studentList.filter(s => s.id !== action.payload.id)
        },
        filterByFiliere: (state, action) => {
            if (action.payload.filiere) {
                state.studentList = state.studentList.filter(s => s.filiere === action.payload.filiere)
            }
        },
        
    }
})

export const { addStudent, editStudent, removeStudent, filterBySearchTerm } = StudentSlice.actions
export default StudentSlice.reducer