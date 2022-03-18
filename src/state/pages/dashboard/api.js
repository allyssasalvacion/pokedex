import { createApiRequest } from "../../api";

export const APICallCreator = {
  getPokemon: (id) => {
    return createApiRequest(`/pokemon/${id}/`, "GET", {});
  },
};
