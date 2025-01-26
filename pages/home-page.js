import React from "react";
import { GAMES } from "./data.js";
import { GameItem } from "../components/game-item";
import "./home-page.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
