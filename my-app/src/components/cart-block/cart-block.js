import React from "react";
import { useSelector } from "react-redux";
import "./cart-block.css";
import { ShoppingCart } from "lucide-react";
export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);
  return (
    <div className="cart-block">
      <ShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">{totalPrice}</span>
    </div>
  );
};
