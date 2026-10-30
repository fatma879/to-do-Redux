import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/taskSlice";

export default configureStore({reducer: {tasks:reducer,},});