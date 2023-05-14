import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contact-slice";
import chartSlice from "./slices/chart-slice";


const store = configureStore({
    reducer: {
        contactSlice: contactSlice.reducer,
        chartSlice: chartSlice.reducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;