import "bootstrap"; 
import "./style.css";
import "./assets/img/rigo-baby.jpg"; 
import "./assets/img/4geeks.ico"; 

const suits = ["♠", "♣", "♥", "♦"]; 
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; 

const superior = document.querySelector("#superior"); 
const valor = document.querySelector("#valor"); 
const inferior = document.querySelector("#inferior");
const generateBtn = document.querySelector("#generateBtn"); 

const valueExtract = arr => arr[Math.floor(Math.random() * arr.length)];

// Función para generar una nueva carta aleatoria
function generateCard() {
  const randomSuit = valueExtract(suits); 
  const randomValue = valueExtract(values); 

  superior.textContent = randomSuit;
  valor.textContent = randomValue;
  inferior.textContent = randomSuit;

  const color = ["♥", "♦"].includes(randomSuit) ? "red" : "black"; 
  [superior, inferior, valor].forEach(el => (el.style.color = color));
}

window.onload = () => {
  generateCard(); 
  generateBtn?.addEventListener("click", generateCard);
};