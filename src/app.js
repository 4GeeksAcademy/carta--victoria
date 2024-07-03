/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let números = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let palos = ["♣", "♦", "♥", "♠"];

function númeroRandom(array) {
  let random = Math.floor(Math.random() * array.length);
  return random;
}

const paloArriba = document.getElementById("palo-arriba");
const número = document.getElementById("número");
const paloAbajo = document.getElementById("palo-abajo");

function cartaRandom() {
  let númeroCarta = números[númeroRandom(números)];
  let paloCarta = palos[númeroRandom(palos)];
  paloArriba.innerHTML = paloCarta;
  número.innerHTML = númeroCarta;
  paloAbajo.innerHTML = paloCarta;

  if (paloCarta === "♦" || paloCarta === "♥") {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
  }
}

window.onload = function() {
  console.log(cartaRandom());
};
