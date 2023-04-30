import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { ItemType } from "./Item.type";

export type GloabalStoreTypes = {
  cartItems: string[];
  itemsList: ItemType[];
  dataLoading: boolean;
  dataLoadingError: boolean;
};
export type SliceStoreType = {
  mainStore: GloabalStoreTypes;
};
export type AppDispatch = ThunkDispatch<
  GloabalStoreTypes,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;
