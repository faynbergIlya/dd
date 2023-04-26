import { create } from "zustand";
import { GloabalStoreTypes } from "./Zustand.types";
import { apiCallUrl } from "./constants";

export const useGlobalStore = create<GloabalStoreTypes>((set) => ({
  cart: new Set(),
  itemsList: [],
  dataLoading: true,
  dataLoadingError: false,
  fetch: async () => {
    try {
      const response = await fetch(apiCallUrl);
      set({ itemsList: await response.json(), dataLoading: false });
    } catch (e) {
      set({ itemsList: [], dataLoading: false, dataLoadingError: true });
    }
  },
  addItemToCart: (itemId) =>
    set((state) => {
      const newCart = new Set(state.cart);
      newCart.add(itemId);
      return { cart: newCart };
    }),
  removeItemFromCart: (itemId) =>
    set((state) => {
      const newCart = new Set(state.cart);
      newCart.delete(itemId);
      return { cart: newCart };
    }),
}));
