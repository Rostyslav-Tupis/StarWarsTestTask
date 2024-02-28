import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FavouritesCharacters } from "../favoritesSlice";

const rootReducer = combineReducers({
  favouritesCharacters: FavouritesCharacters.reducer,
});

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
