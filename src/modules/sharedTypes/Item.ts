export type ItemType = {
  id: string;
  imgUrl: string;
  itemName: string;
  price: number;
};
export type ItemCallbacks = {
  onAdd: boolean | ((itemId: string) => void);
  onRemove: (itemId: string) => void;
};
