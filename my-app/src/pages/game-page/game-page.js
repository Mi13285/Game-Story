import React from "react";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/game-cover/game-cover";
import { GameBuy } from "../../components/game-buy";
import { GameGenre } from "../../components/game-genre";
import "./game-page.css";
import { useParams } from "react-router";
import { GAMES } from "../data";

export const GamePage = () => {
  // const game = useSelector((state) => state.games.currentGame);

  const { id } = useParams();

  const game = GAMES.find((el) => el.id.toString() === id);

  if (!game) return <p>Нет такой игры</p>;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
