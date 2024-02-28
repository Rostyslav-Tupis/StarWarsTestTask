
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GenderCounterState {
    male: number;
    female: number;
    other: number;
    favCharacters: {
      name: string;
      gender: string;
    }[];
  }
  
  const initialState: GenderCounterState = {
    male: 0,
    female: 0,
    other: 0,
    favCharacters: [],
  };


export const FavouritesCharacters = createSlice({
    name:"favouritesCharacters",
    initialState,
    reducers:{
        resetAllFans:(state) => {
            state.male = 0
            state.female = 0
            state.other = 0,
            state.favCharacters = []
        },
        addFavCharacter: (state, { payload }: PayloadAction<{name:string, gender:string}>) => {          
            const isCharacterIncluded = state.favCharacters.some((item) => item.name === payload.name);
            
            if (isCharacterIncluded) {
              state.favCharacters = state.favCharacters.filter((char) => char.name !== payload.name);
            } else {
              state.favCharacters.push(payload);
            }
          
            if (payload.gender === 'male' || payload.gender === 'female') {
              state[payload.gender] = isCharacterIncluded ? Math.max(0, state[payload.gender] - 1) : state[payload.gender] + 1;
            } else {
              state.other = isCharacterIncluded ? Math.max(0, state.other - 1) : state.other + 1;
            }
          },          
    }
}) 

export const {resetAllFans, addFavCharacter} = FavouritesCharacters.actions

export default FavouritesCharacters.reducer