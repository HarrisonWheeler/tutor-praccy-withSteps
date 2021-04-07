import { ProxyState } from "../AppState.js";
import { wildPokemonService } from "../Services/WildPokemonService.js"

// TODO Step 11: now that we know our data is good and is what we expect, we need to handle drawing this to the page!

function drawWildPokemon(){
  let wildPokemon = ProxyState.wildPokemon
  let template = ''
  wildPokemon.forEach(wp => {
    // Step 12: because we know that if we give this particular api the name of the pokemon we can get all of its info so that is what we need to pass to the method to make this happen
    template += /*html*/`<li class="cursor" onclick="app.wildPokemonController.getActivePokemon('${wp.name}')">${wp.name}</li>`
  })
  document.getElementById("wildPokemon").innerHTML = template
}

function drawActivePokemon(){
  let activePokemon = ProxyState.activePokemon
  document.getElementById('activePokemon').innerHTML = activePokemon.Template
}



// TODO Step 6: lets build out the controller and the constructor then call the service to run our api get request
export default class WildPokemonController{
  
  // TODO remember that the constructor will load first when this controller is loaded so think about the things you want to have happen at that point
  constructor(){
    // TODO Step 11.5: we want to set up the proxystate.on to watch when the wildpokemon array changes
    ProxyState.on("wildPokemon", drawWildPokemon)
    ProxyState.on("activePokemon", drawActivePokemon)
      this.getWildPokemon()
    }


   getWildPokemon(){
    // TODO Step 7: this is the method that is calling our wildPokemonService to initiate our api call
    wildPokemonService.getWildPokemon()
  }

  // TODO Step 13: we need to take in the pokemon name into our method so we can that along to our service to make another api call
  getActivePokemon(pokemonName){
    console.log(pokemonName);
    wildPokemonService.getActivePokemon(pokemonName)
  }


}