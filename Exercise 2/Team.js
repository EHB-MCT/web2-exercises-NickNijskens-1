class Team {
  constructor(teamname = "Example teamname", trainername = "Example trainername"){
    this.teamname = teamname;
    this.trainername = trainername;
    this.team = [];
    this.teamLength = 6;
  }

  describe(){
    let HTMLstring = `<div id="team">`;
    HTMLstring += `<div id="teamname">${this.teamname}</div>`;
    HTMLstring += `<div id="trainername">${this.trainername}</div>`;
    this.team.forEach((poke) => {
      HTMLstring += `<div class="pokemonTeam">`;
      HTMLstring += `<img src="${poke.spriteLink}">`;
      HTMLstring += `<div class="pokeNR">${poke.id}</div>`;
      HTMLstring += `<div class="pokeName">${poke.name}</div>`;
      HTMLstring += `<div class="pokeTypes">${poke.types[0]}/${poke.types[1]}</div>`;
      HTMLstring += `</div>`
    })
    HTMLstring += `</div>`
    return HTMLstring;
  }

  addPokemon(pokemon){
    if(team.length == teamLength){
      document.getElementById("description").innerHTML = `<p>The roster is full!</p>${this.describe()}`;
    } else{
      let inc = false;
      team.forEach((poke) => {
        if(poke.id == pokemon.id){
          inc = true;
        }
      });
      if(inc){
        team.push(pokemon);
        document.getElementById("description").innerHTML = `<p>The pokemon ${pokemon.name} has been succesfully added to the team!</p>${this.describe()}`;
      }
      else {
        document.getElementById("description").innerHTML = `<p>This pokemon is already part of your roster</p>${this.describe()}`;
      }
    }
    
  }
}

let team = new Team();
export default team;