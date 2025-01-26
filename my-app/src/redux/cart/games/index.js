import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducer";
import cartReducer from "../reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer,
  },
});
