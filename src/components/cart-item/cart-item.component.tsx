import { FC, memo } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.type.js";
import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

type CartItemProps ={
  cartItem:TCartItem
}

const CartItem:FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>

        <Price>
          {quantity} x {price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
