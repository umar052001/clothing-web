import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
const CartDropdown = () => {
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <EmptyMessage>No items</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutHandler}>Check Out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
