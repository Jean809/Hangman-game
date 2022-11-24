"use script";

//How to play button
const howToPlay = document.getElementById("how-to-play");

//reset button
const reset = document.getElementById("reset");

//start game button
const startGame = document.getElementById("play-btn");
const startGameText = document.getElementById("start-the-game");
const playbtn = document.getElementById("the-button");

//Score being displayed on screen
const score = document.querySelector(".score-text");
const death = document.querySelector(".death-text");

// The tree + the body of hangman
const hangmanContainer = document.querySelector(".hangman");
const tree = document.querySelector(".tree");
const rope = document.querySelector(".rope");
const neck = document.querySelector(".neck");
const head = document.querySelector(".head");
const body = document.querySelector(".body");
const leftArm = document.querySelector(".left-arm");
const rightArm = document.querySelector(".right-arm");
const leftFoot = document.querySelector(".left-foot");
const rightFoot = document.querySelector(".right-foot");

//The crowd next to hangman
const crowd = document.querySelector(".crowd");

//The characters

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const h = document.getElementById("h");
const i = document.getElementById("i");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");
const m = document.getElementById("m");
const n = document.getElementById("n");
const o = document.getElementById("o");
const p = document.getElementById("p");
const q = document.getElementById("q");
const r = document.getElementById("r");
const s = document.getElementById("s");
const t = document.getElementById("t");
const u = document.getElementById("u");
const v = document.getElementById("v");
const w = document.getElementById("w");
const x = document.getElementById("x");
const y = document.getElementById("y");
const z = document.getElementById("z");

//Array of each characters w/ DOM
const allChar = document.querySelectorAll(".char");

//List of words that needs to be guessed
const listWords = [
  "House",
  "computer",
  "mathematics",
  "playstation",
  "nintendo",
  "science",
  "nightmare",
  "skeleton",
  "cemetary",
  "commander",
  "friends",
  "fighting",
];

guessWord = document.getElementById("guess-word");
guessWord.classList.add("opacity");

//If button is clicked, then change background to black

for (let i = 0; i < allChar.length; i++) {
  allChar[i].addEventListener("click", function () {
    allChar[i].style.background = "url(black.jpg)";
  });
}

function guessTheWord(arr) {}

//Playing button changes on click

startGame.addEventListener("click", function () {
  startGameText.textContent = "Playing...";
  startGameText.style.left = "100%";
  startGameText.style.top = "60%";
  playbtn.classList.remove("fa-solid", "fa-play", "fa-5x");
  playbtn.classList.add("fa-solid", "fa-person-digging", "fa-4x");
  tree.classList.add("opacity");
  rope.classList.add("opacity");
  neck.classList.add("opacity");
  head.classList.add("opacity");
  body.classList.add("opacity");
  rightArm.classList.add("opacity");
  leftArm.classList.add("opacity");
  leftFoot.classList.add("opacity");
  rightFoot.classList.add("opacity");
  crowd.classList.add("opacity");
});
