import React from "react";
import { CartIcon } from "./CartIcon";
import { FloatingCartWrapper } from "./FloatingCart.styles";
import { FloatingPropsType } from "./FloatingCart.types";
import { useSelector } from "react-redux";
import { getItemsInTheCartCount } from "@dtest/storemodule";

const FloatingCart: React.FC<FloatingPropsType> = () => {
  const itemsInCartCount = useSelector(getItemsInTheCartCount);
  return (
    <FloatingCartWrapper>
      <span>{itemsInCartCount}</span>
      <CartIcon />
    </FloatingCartWrapper>
  );
};

export default FloatingCart;
