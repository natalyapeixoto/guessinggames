

let randomNumber = Math.floor(Math.random() * 100);
let form = document.querySelector(".game");
let user = document.querySelector(".game input");
let dica = document.querySelector(".result p");
let resultado = document.querySelector(".result");

console.log(form, user);

let tentativas = 0;
console.log(randomNumber);

form.addEventListener('submit', event => {
    event.preventDefault();
    tentativas++;

    const userInput = user.value;

    var result = document.querySelector(".result");


    if (tentativas >= 5) {
      form.style.display = "none";
      resultado.style.display = "flex";
      resultado.style.backgroundImage ="none";

      dica.innerHTML = `<p>vc só tem 5 tentativas, sorry. Tente outra vez!</p>`;
      console.log(dica)
    }

    else if (userInput == randomNumber) {
      form.style.display = "none";

      resultado.style.display = "flex";
      resultado_p.innerHTML = `<p> O numero é esse garota!! foram ${tentativas} tentativas </p>`;
    } 

    else if (userInput > randomNumber){
      const dica = document.querySelector(".game p");
      dica.style.opacity = 1;
      dica.innerHTML = "O numero é menor";
      console.log(dica);
      setTimeout(()=> dica.style.opacity = 0, 1000);
    } 

    else if ( userInput < randomNumber) {
      const dica = document.querySelector(".game p");
      dica.style.opacity = 1;
      dica.innerHTML = "O numero é maior";
      setTimeout(()=> dica.style.opacity = 0, 1000);
    }

});