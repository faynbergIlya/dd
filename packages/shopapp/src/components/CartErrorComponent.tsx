import { CartErrorWrapper } from "./CartErrorComponent.styles";
import React from "react";

export const CartErrorComponent: React.FC = () => {
  return (
    <CartErrorWrapper>
      Due to internal error the cart can't be retrieved
    </CartErrorWrapper>
  );
};
