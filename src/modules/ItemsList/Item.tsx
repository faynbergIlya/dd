import { useCallback } from "react";
import {
  ItemAction,
  ItemLabel,
  ItemWrapper,
  Image,
  ItemPrice,
} from "./Item.styles";
import { ItemPropsType } from "./Item.types";

export const Item: React.FC<ItemPropsType> = (props) => {
  const {
    id,
    onAdd,
    onRemove,
    price,
    itemName,
    imgUrl,
    isAddedToCart = false,
  } = props;
  const onClick = useCallback(() => {
    if (onAdd && typeof onAdd === "function")
      isAddedToCart ? onRemove(id) : onAdd(id);
  }, [id, isAddedToCart, onAdd, onRemove]);
  return (
    <ItemWrapper>
      <Image src={imgUrl} />
      <ItemLabel>{itemName}</ItemLabel>

      <ItemAction>
        <ItemPrice>{price}</ItemPrice>
        {Boolean(onAdd) && (
          <button onClick={onClick}>{isAddedToCart ? "Remove" : "Add"}</button>
        )}
      </ItemAction>
    </ItemWrapper>
  );
};
