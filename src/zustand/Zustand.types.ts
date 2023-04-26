import { ItemType } from "../modules/sharedTypes";

export type GloabalStoreTypes = {
  cart: Set<string>;
  itemsList: ItemType[];
  dataLoading: boolean;
  dataLoadingError: boolean;
  addItemToCart: (itemId: string) => void;
  removeItemFromCart: (itemId: string) => void;
  fetch: () => Promise<void>;
};
