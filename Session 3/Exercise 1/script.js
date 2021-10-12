var number;
function renewNumber(){
  number = Math.ceil(Math.random() * 20);
}
renewNumber();

async function compareNumber(nr){
  let promise = new Promise((res, rej) => {
    if(nr == NaN){
      rej("That is not a number");
    }
    else if(nr == number){
      renewNumber();
      res("You have guessed the mystery number");
    }
    else if(nr < number){
      res("The mystery number is higher. Guess again!");
    }
    else if(nr > number){
      res("The mystery number is lower. Guess again!");
    }
  });
  return promise;
}

document.getElementById("form").addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById("result").innerHTML = `<p>${compareNumber(document.getElementById(guess))}</p>`;
})