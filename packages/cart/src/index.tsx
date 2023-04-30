import { memo, useMemo } from "react";
import { CartItemWrapper, CartWrapper } from "./Cart.styles";
import React from "react";
import { useSelector } from "react-redux";
import { getItems, getItemsInTheCart } from "@dtest/storemodule";

const Cart: React.FC = () => {
  const itemIds = useSelector(getItemsInTheCart);
  const allItems = useSelector(getItems);
  const items = useMemo(() => {
    return allItems.filter((srcItem) => {
      return itemIds.includes(srcItem.id);
    });
  }, [allItems, itemIds]);
  return (
    <>
      <h2>Cart</h2>
      <CartWrapper>
        {items.map((item) => (
          <CartItemWrapper>
            <span>{item.itemName}</span>
            <span>{item.price}</span>
          </CartItemWrapper>
        ))}
      </CartWrapper>
    </>
  );
};

export default memo(Cart);
