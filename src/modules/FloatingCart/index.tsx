import { CartIcon } from "./CartIcon";
import { FloatingCartWrapper } from "./FloatingCart.styles";
import { FloatingPropsType } from "./FloatingCart.types";

const FloatingCart: React.FC<FloatingPropsType> = ({ itemsAmount = 0 }) => {
  return (
    <FloatingCartWrapper>
      <span>{itemsAmount}</span>
      <CartIcon />
    </FloatingCartWrapper>
  );
};

export default FloatingCart;
