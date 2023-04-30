import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getItemsThunk } from "./thunk";
export const slice = createSlice({
  name: "mainStore",
  initialState: initialState,
  reducers: {
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((arrItem) => arrItem !== itemId);
      return state;
    },
    addItem: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.cartItems.push(payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemsThunk.pending, (state) => {
        state.dataLoading = true;
        state.dataLoadingError = false;
      })
      .addCase(getItemsThunk.fulfilled, (state, { payload }) => {
        state.itemsList = payload;
        state.dataLoading = false;
        state.dataLoadingError = false;
      })
      .addCase(getItemsThunk.rejected, (state) => {
        state.dataLoading = false;
        state.dataLoadingError = true;
      });
  },
});

export const { reducer: mainReducer } = slice;
