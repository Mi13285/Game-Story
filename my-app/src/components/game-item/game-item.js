import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GameGenre } from "../game-genre";
import { setCurrentGame } from "../../redux/cart/games/reducer";
import "./game-item.css";
export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.id}`);
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
