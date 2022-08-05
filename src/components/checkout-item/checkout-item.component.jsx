import "./checkout-item.styles.scss";

import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { removeOnClick, addToCart, removeToCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const decrementQuantity=() => removeToCart(cartItem)
  const incrementQuantity =() => addToCart(cartItem)
  const removeItem = () => removeOnClick(cartItem)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
