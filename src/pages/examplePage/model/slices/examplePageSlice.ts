import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExamplePageSchema } from '../types/examplePageSchema';

const initialState: ExamplePageSchema = {
    
};

export const examplePageSlice = createSlice({
    name: 'examplePage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: examplePageActions } = examplePageSlice;
export const { reducer: examplePageReducer } = examplePageSlice;