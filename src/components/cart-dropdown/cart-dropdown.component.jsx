import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CartDropdown = () => {
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const cartItems = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>No items</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutHandler}>Check Out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
