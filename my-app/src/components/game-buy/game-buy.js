import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}руб</span>
      <Button type="primary" onClick={handleClick}>
        В Корзину
      </Button>
    </div>
  );
};
