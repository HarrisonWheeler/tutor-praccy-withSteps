import WildPokemonController from "./Controllers/WildPokemonController.js";

class App {
  // TODO Step 8: Always remember to "register" your controller in the main.js or none of your controllers or services will work
  wildPokemonController = new WildPokemonController()
}

window["app"] = new App();
