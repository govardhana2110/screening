import { createSlice } from '@reduxjs/toolkit';

const sampleReduxSlice = createSlice({
    name: 'sampleRedux',
    initialState: {
        status: false,
    },
    reducers: {
        setSampleReduxStatus(state, action) {
            state.status = action?.payload?.status;
            state.data = action?.payload?.data;
        },
    },
});

export const sampleReduxReducer = sampleReduxSlice.reducer;
export const { setSampleReduxStatus } = sampleReduxSlice.actions;