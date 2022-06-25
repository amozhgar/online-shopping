import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BaseButton,
  GoogleSigninButton,
  InvertedButton,
} from "../button/button.component";
import { useCallback } from "react";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSigninButton},
  ${InvertedButton} {
    font-size: 12px;
    margin-top: auto;

    @media screen and (max-width: 800px) {
      font-size: 9px;
    }
  }

  @media screen and (max-width: 800px) {
    top: 50px;
    right: 20px;
    width: 200px;
    height: 300px;
  }
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutPage = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutPage}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
