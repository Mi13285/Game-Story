import React from "react";
import "./cart-block.css";
import { ShoppingCart } from "lucide-react";
export const CartBlock = () => {
  return (
    <div className="cart-block">
      <ShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">2313</span>
    </div>
  );
};
