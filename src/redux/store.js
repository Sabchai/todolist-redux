
import { configureStore } from '@reduxjs/toolkit';
import todolistSlice from './todolistSlice'
export default configureStore({
    reducer:{
 todo : todolistSlice
    }
})