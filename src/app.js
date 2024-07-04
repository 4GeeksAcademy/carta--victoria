/* eslint-disable */
import "bootstrap";
import "./style.css";

let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let palos = ["♣", "♦", "♥", "♠"];

function numeroRandom(array) {
  let random = Math.floor(Math.random() * array.length);
  return random;
}

const paloArriba = document.getElementById("palo-arriba");
const numero = document.getElementById("numero");
const paloAbajo = document.getElementById("palo-abajo");

function cartaRandom() {
  let numeroCarta = numeros[numeroRandom(numeros)];
  let paloCarta = palos[numeroRandom(palos)];
  paloArriba.innerHTML = paloCarta;
  numero.innerHTML = numeroCarta;
  paloAbajo.innerHTML = paloCarta;

  if (paloCarta === "♦" || paloCarta === "♥") {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
  }
}

window.onload = function() {
  console.log(cartaRandom());
};
