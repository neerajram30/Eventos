import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import eventService from './eventService'

const initialState = {
    event: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const create = createAsyncThunk('event/create', async (event, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token;
        console.log(token);
        return await eventService.create(event,token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
        reset:(state)=>initialState,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(create.pending, (state, action)=>{
            state.isLoading = true;
        })
        .addCase(create.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.event.push(action.payload)
        })
        .addCase(create.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})


export const {reset} = eventSlice.actions
export default eventSlice.reducer