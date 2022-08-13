import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    email : '',
    password :'',
}

const ConnexionSlice = createSlice({
    name : 'connexion',
    initialState,
    reducers :{
        set : (state,data)=>{
            state.email = data.payload.email
            state.password = data.payload.password
        }
    }
})
const ConnexionReducer = ConnexionSlice.reducer
export default ConnexionReducer
export const ConnexionActions = ConnexionSlice.actions