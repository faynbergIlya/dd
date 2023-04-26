import { memo } from "react";
import { CartItemWrapper, CartWrapper } from "./Cart.styles";
import { CartPropsType } from "./Cart.types";

const Cart: React.FC<CartPropsType> = (props) => {
  const { items } = props;
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
