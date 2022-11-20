"use script";

//How to play button
const howToPlay = document.getElementById("how-to-play");

//reset button
const reset = document.getElementById("reset");

//start game button
const startGame = document.getElementById("play-btn");

//Score being displayed on screen
const score = document.getElementsByClassName("score-text");
const death = document.getElementsByClassName("death-text");

// The tree + the body of hangman
const tree = document.getElementsByClassName("tree");
const neck = document.getElementsByClassName("neck");
const head = document.getElementsByClassName("head");
const body = document.getElementsByClassName("body");
const leftArm = document.getElementsByClassName("left-arm");
const rightArm = document.getElementsByClassName("right-arm");
const leftFoot = document.getElementsByClassName("left-foot");
const rightFoot = document.getElementsByClassName("right-foot");

//The crowd next to hangman
const crowd = document.getElementsByClassName("crowd");

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
