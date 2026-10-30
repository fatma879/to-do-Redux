import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const taskSlice = createSlice({
name: "tasks",
initialState:[ {
    id: uuidv4(),
    description: "This is task 1",
    isDone: false,
}],
reducers:{
    add:(state, action) => [...state,{
        id: uuidv4(),
        description: action.payload,
        isDone: false
    }],
    update:(state, action) => state.map((task) => task.id === action.payload ? {...task, isDone: !task.isDone} : task)
}});
export const {add, update} = taskSlice.actions;
export default taskSlice.reducer;

