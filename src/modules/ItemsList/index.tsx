import { memo } from "react";
import { Item } from "./Item";
import { ItemPropsType } from "./Item.types";
import {
  ExternalModulesWrapper,
  ItemsListHeaderWrapper,
  ItemsListOutterWrapper,
  ItemsWrapper,
} from "./ItemsList.style";
import { ItemsListPropsType } from "./ItemsList.types";
import React from "react";

const ItemsList: React.FC<ItemsListPropsType> = (props) => {
  const { items, onAdd, onRemove, itemsInCart, externalModule } = props;
  return (
    <>
      <ItemsListHeaderWrapper>
        <h2>Items</h2>
        <ExternalModulesWrapper>
          {externalModule && externalModule}
        </ExternalModulesWrapper>
      </ItemsListHeaderWrapper>
      <ItemsListOutterWrapper>
        <ItemsWrapper>
          {items.map((item) => {
            const itemProps: ItemPropsType = {
              ...item,
              onAdd,
              onRemove,
              isAddedToCart: itemsInCart.has(item.id),
            };
            return <Item key={item.id} {...itemProps} />;
          })}
        </ItemsWrapper>
      </ItemsListOutterWrapper>
    </>
  );
};
export default memo(ItemsList);
