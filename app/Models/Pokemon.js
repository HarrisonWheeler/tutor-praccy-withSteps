
// TODO Step 15: Now that we know we have the data we need to draw something to the page, lets build a model to "map" our reponse data to
export default class Pokemon{

  constructor(data){
    // TODO Step 18: now that the active pokemon is drawing NOW we need to worry about posting this pokemon to the Sandbox api - so lets go check the Schema for that and see what else we need to post it 
    this.name = data.name
    this.types = data.types[0].type.name || "Unknown Type"
    this.img = data.sprites.front_shiny
  }

  // TODO Step 16: After we set up what data we actually want from the response ohject, now lets set up how we want that to look. We will now need to set up a draw function

  get Template(){
    return /*html*/`
    <div class="card">
        <img class="img-fluid" src="${this.img}" alt=""/>
        <h1>${this.name}</h1>
        <h3>${this.types}</h3>
        <button class="btn btn-danger" onclick="app.wildPokemonController.catchPokemon(${this.Pokemon})">Catch Pokemon</button>
    </div>
    `
  }

}