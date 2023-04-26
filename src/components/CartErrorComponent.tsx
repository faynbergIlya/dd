import { CartErrorWrapper } from "./CartErrorComponent.styles";

export const CartErrorComponent: React.FC = () => {
  return (
    <CartErrorWrapper>
      Due to internal error the cart can't be retrieved
    </CartErrorWrapper>
  );
};
