import { lazy, memo, useCallback } from "react";
import { Item } from "./Item";
import { ItemPropsType } from "./Item.types";
import {
  ItemsListHeaderWrapper,
  ItemsListOutterWrapper,
  ItemsWrapper,
} from "./ItemsList.style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  slice,
  getItems,
  getItemsInTheCart,
} from "@dtest/storemodule";
const LazyFloatingCart = lazy(() => import("@dtest/floatingcart"));
const ItemsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onAdd = (itemId: string) => {
    dispatch(slice.actions.addItem(itemId));
  };

  const onRemove = useCallback(
    (itemId: string) => {
      dispatch(slice.actions.removeItemFromCart(itemId));
    },
    [dispatch]
  );

  const items = useSelector(getItems);
  const itemsInCart = useSelector(getItemsInTheCart);

  return (
    <>
      <ItemsListHeaderWrapper>
        <h2>Items</h2>
        <LazyFloatingCart />
      </ItemsListHeaderWrapper>
      <ItemsListOutterWrapper>
        <ItemsWrapper>
          {items?.map((item) => {
            const isAddedToCart =
              itemsInCart.findIndex((arrITem) => arrITem === item.id) !== -1;
            const itemProps: ItemPropsType = {
              ...item,
              onAdd,
              onRemove,
              isAddedToCart,
            };
            return <Item key={item.id} {...itemProps} />;
          })}
        </ItemsWrapper>
      </ItemsListOutterWrapper>
    </>
  );
};
export default ItemsList;
