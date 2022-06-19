import { useEffect } from "react";
import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  //find if cartItem contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItem/ new cartt item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
  // cartItems.find((cartItem) =>
  //   cartItem.id === productToAdd.id
  //     ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //     : cartItem
  // );
  // return [...cartItems, { ...productToAdd, quantity: +1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // // find the cart item to remove
  // const existingCartItem = cartItems.find(
  //   (cartItem) => cartItem.id === productToRemove.id
  // );
  // // check if quantity is equal to 1, if it is remove that item from the cart
  // if (existingCartItem.quantity === 1) {
  //   return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  // }
  // // return back cartItems with matching cart item with reduced quantity
  // return cartItems.map((cartItem) =>
  //   cartItem.id === productToRemove.id
  //     ? { ...cartItem, quantity: cartItem.quantity - 1 }
  //     : cartItem
  // );
  const decrementedCartItems = cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

  return decrementedCartItems.filter((item) => item.quantity > 0);
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
