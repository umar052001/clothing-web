import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  NamePrice,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
import {
  addToCart,
  removeOnClick,
  removeToCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem as TCartItem } from "../../store/cart/cart.type";
import { FC, memo } from "react";

type CartItemProps = {
  cartItem: TCartItem;
};

const CheckoutItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const decrementQuantity = () => dispatch(removeToCart(cartItems, cartItem));
  const incrementQuantity = () => dispatch(addToCart(cartItems, cartItem));
  const removeItem = () => dispatch(removeOnClick(cartItems, cartItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePrice>{name}</NamePrice>
      <Quantity>
        <Arrow onClick={decrementQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementQuantity}>&#10095;</Arrow>
      </Quantity>
      <NamePrice>{price}</NamePrice>
      <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
