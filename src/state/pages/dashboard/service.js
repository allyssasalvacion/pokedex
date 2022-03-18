import { store } from "../../store";
import { APICallCreator } from "./api";
import { setPokemons } from "./slice";

export const DashboardService = {
  pokemon: async (startId, endId) => {
    for (let i = startId; i <= endId; i++) {
      const response = await APICallCreator.getPokemon(i);
      store.dispatch(setPokemons(response));
    }
  },
};
