import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    token : ''
}

const headerSlice = createSlice({
    name : 'header',
    initialState,
    reducers :{
        set : (state,data)=>{
            state.token = data.payload
        },
        clear:(state)=>{
            state.token = ''
        }
    }
})
const headerReducer = headerSlice.reducer
export default headerReducer
export const headerActions = headerSlice.actions