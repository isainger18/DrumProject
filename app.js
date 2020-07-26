let btn = document.querySelectorAll(".btn");
let btna = document.getElementById("btna");
let btns = document.getElementById("btns");

btn.forEach((e) => {
  e.addEventListener("click", drumBeats);
});

function drumBeats(e) {
  let buttonText = this.innerHTML;
  makeSound(buttonText);
}
btn.forEach((e) => {
  e.addEventListener("keypress", pressbutton);
});

function pressbutton(e) {
  makeSound(e.key);
}

function makeSound(key) {
  switch (key) {
    case "A":
      let audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "S":
      let audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "S":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "D":
      let audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "F":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "G":
      let audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "H":
      let audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "J":
      let audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;

    default:
      console.log(key);
  }
}
