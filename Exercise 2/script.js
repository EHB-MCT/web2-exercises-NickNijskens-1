import team from './Team';

class Pokemon {
  constructor(id){
    this.id = id;
    this.name = "";
    this.spriteLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    this.types = [];
  }

  async fillTypesandName(){
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${this.id}/`);
    let json = await data.json();

    json.types.forEach((obj) => {
      this.types.push(obj.type.name);
    });

    this.name = json.name;
  }
}


window.onload = () => {
  for(let i = 1; i <= 151; i++){
    let pokemon = new Pokemon(i);
    pokemon.fillTypesandName().then(() => {
      document.getElementById('content').innerHTML += `<div id="${pokemon.id}">
      <img src="${pokemon.spriteLink}">
      <div class="nr">${pokemon.id}</div>
      <div class="name">${pokemon.name}</div>
      <div class="types">${pokemon.types[0]}/${pokemon.types[1]}</div>
      <button class="btn" value="${pokemon}">Add to team</button>
    </div>`;
    console.log(pokemon);
    });
  }
  document.getElementsByClassName("btn").addEventListener("click", () => {
    event.preventDefault();
    team.addPokemon(this.value);
  })
};