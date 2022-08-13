import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    id : ''
}

const NavBarSlice = createSlice({
    name : 'navBar',
    initialState,
    reducers :{
        set : (state,data)=>{
            state.id = data.payload
        }
    }
})
const NavBarReducer = NavBarSlice.reducer
export default NavBarReducer
export const NavBarActions = NavBarSlice.actions