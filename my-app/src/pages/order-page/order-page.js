import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import "./order-page.css";
import { calcTotalPrice } from "../../components/utils";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1> Ваша корзина пуста</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} на сумму {calcTotalPrice(items)} руб
          </span>
        </div>
      </div>
    </div>
  );
};
