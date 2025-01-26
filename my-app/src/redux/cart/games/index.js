import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer";
import { gamesReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer,
  },
});
