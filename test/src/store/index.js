import { sampleReduxReducer } from './slices/sampleRedux';
import { configureStore } from '@reduxjs/toolkit';

export const store=configureStore({
    reducer:{
        sampleRedux:sampleReduxReducer,
    }
})