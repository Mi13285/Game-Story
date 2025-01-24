import React from "react";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import "./cart-block.css";
import { ShoppingCart } from "lucide-react";
import { calcTotalPrice } from "../utils";
export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">{totalPrice}руб</span>
      <CartMenu items={items} onClick={() => null} />
    </div>
  );
};
