import { createSlice } from "@reduxjs/toolkit";


const counterSlice= createSlice({
    name: "counter",
    initialState: {so: 0},
    reducers:{
        tang: (state) =>{
            state.so+=1
        },
        giam: (state)=>{
            state.so -=1
        }
    }
});

export const{tang,giam} = counterSlice.actions
export default counterSlice.reducer

