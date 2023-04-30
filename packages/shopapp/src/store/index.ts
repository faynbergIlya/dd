import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "@dtest/storemodule";
export const store = configureStore({
  reducer: { mainStore: mainReducer },
});
