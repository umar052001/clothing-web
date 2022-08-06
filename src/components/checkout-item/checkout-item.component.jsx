import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  NamePrice,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { removeOnClick, addToCart, removeToCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const decrementQuantity = () => removeToCart(cartItem);
  const incrementQuantity = () => addToCart(cartItem);
  const removeItem = () => removeOnClick(cartItem);
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
};

export default CheckoutItem;
