import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    courses : [
        {
            id:0,
            nom : '',
            preview : '',
            teacher_id : 0,
            phone : '',
            students : ''
        }
    ]
    
}

const CoursesSlice = createSlice({
    name : 'courses',
    initialState,
    reducers :{
        addCourse : (state,data)=>{
            state.courses.push(data.payload) //c'est a dire le data aura dans son payload l'id du cours qu'on aimerais modifier
        },
        setAll : (state ,data) => {
            state.courses = data.payload
        }
    }
})
const CoursesReducer = CoursesSlice.reducer
export default CoursesReducer
export const CoursesActions = CoursesSlice.actions