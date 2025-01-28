import React from "react";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";
import "./order-item.css";
import { GameCover } from "../game-cover";
import { deleteItemFromCart } from "../../redux/cart/reducer";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price}руб</span>
        <X size={25} className="cart-item__delete-icon" onClick={handleClick} />
      </div>
    </div>
  );
};
