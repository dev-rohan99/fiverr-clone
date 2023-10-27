import { confiureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice.js";


const store = confiureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(apiSlice.middleware)
    },
    devTools : true
});


export default store;
