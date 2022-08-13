import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { postAPIConnectionURL /*, connexionData*/ } from '../../../Data'

const initialState = {
    loading : false,
    data : [],
    err : ''
}
 export const connect = createAsyncThunk(async()=>{
    return await axios.post(postAPIConnectionURL , 1 )
        .then(response => response.token)
})

const headerAsyncSlice = createSlice({
    name : 'headerAsync',
    initialState,
    extraReducers:builder => {
        builder.addCase(connect.pending , state => {
            state.loading = true
            state.data = []
            state.err = ''
        })
        builder.addCase(connect.fulfilled , (state,action) => {
            state.loading = false
            state.data = action.payload
            state.err = ''
        })
        builder.addCase(connect.rejected , (state,action) => {
            state.loading = false
            state.data = []
            state.err = action.message
        })
    }
})

const headerAsyncReducer = headerAsyncSlice.reducer
export default headerAsyncReducer