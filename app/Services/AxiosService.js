
// TODO Step 3: first thing we need to do here is export a const variable that represents our axios instance that we can import into other files
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})