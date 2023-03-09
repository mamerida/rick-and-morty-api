import { configureStore } from "@reduxjs/toolkit";

//reducer 
import characterReducers from '../reducers/characterSlices'

//se crea el store de mi app
export default configureStore({
    reducer: {
        characters: characterReducers
    }
})