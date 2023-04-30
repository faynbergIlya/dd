import { SliceStoreType } from "../types";

export const getItemsInTheCartCount = (state: SliceStoreType) =>
  state.mainStore.cartItems.length;
export const getItemsInTheCart = (state: SliceStoreType) =>
  state.mainStore.cartItems;
export const getItems = (state: SliceStoreType) => state.mainStore.itemsList;
export const getLoadingAndErrorStatus = (state: SliceStoreType) => ({
  dataLoading: state.mainStore.dataLoading,
  dataLoadingError: state.mainStore.dataLoadingError,
});
