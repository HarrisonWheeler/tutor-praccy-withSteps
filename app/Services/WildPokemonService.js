import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js"

// TODO Step 4: create the class and the export so we can access this class/method in other files
class WildPokemonService{

  // TODO Step 5: lets set up a class method to go get data from the api that we set up in the axios service
  async getWildPokemon(){
  let res = await pokemonApi.get()
  // TODO ALWAYS LOG THE RES. ALWAYS ALWAYS PRETTY PLEASE
  console.log("initial response:", res);
  // TODO Step 10: once we know what the data looks like, lets store in ProxyState where we created a spot to store it. Then lets check to make sure that looks like what we expected
  ProxyState.wildPokemon = res.data.results
  console.log("ProxyState being set", ProxyState.wildPokemon);
}

// TODO Step 14: now we need to build the method to get a particular pokemon and remember to take in the name as an argument here
async getActivePokemon(pokemonName){
  let res = await pokemonApi.get(pokemonName)
  console.log("Active pokemon response:", res.data);
  ProxyState.activePokemon = new Pokemon(res.data)
  console.log("ProxyState's active pokemon:", ProxyState.activePokemon);
}


}

export const wildPokemonService = new WildPokemonService()