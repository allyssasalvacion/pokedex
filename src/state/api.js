import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const createApiRequest = async (url, method, data) => {
  try {
    const response = await axios({
      url,
      method,
      headers: headers,
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export default axios;
