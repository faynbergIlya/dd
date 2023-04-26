import { ItemCallbacks, ItemType } from "../sharedTypes";

export type ItemPropsType = {
  isAddedToCart?: boolean;
} & ItemType &
  ItemCallbacks;
