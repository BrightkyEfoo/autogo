import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    id:0,
    email : '',
    nom : '',
    prenom : '',
    birthDate : '',
    phone : '',
    status : false,
    courses : ['']
}

const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{
        set : (state,data)=>{
            state.id = data.payload.id
            state.email = data.payload.email
            state.nom = data.payload.nom
            state.prenom = data.payload.prenom
            state.birthDate = data.payload.birthDate
            state.phone = data.payload.phone
            state.status = data.payload.status
            state.courses = data.payload.courses
        },
        clear : (state)=>{
            state.id = 0
            state.email = ""
            state.nom = ""
            state.prenom = ""
            state.birthDate = ""
            state.phone = ""
            state.status = false
            state.courses = [""]
        }
    }
})
const UserReducer = UserSlice.reducer
export default UserReducer
export const UserActions = UserSlice.actions