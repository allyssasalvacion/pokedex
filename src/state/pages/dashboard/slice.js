import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons.push(action.payload);
    },
  },
});

export const { setPokemons } = dashboardSlice.actions;

export default dashboardSlice.reducer;
