import { ItemCallbacks, ItemType } from "../sharedTypes";

export type ItemsListPropsType = {
  externalModule?: React.ReactElement | boolean;
  items: ItemType[];
  itemsInCart: Set<string>;
} & ItemCallbacks;
