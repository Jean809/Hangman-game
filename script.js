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

//div of the word that needs to be guessed
guessWord = document.getElementById("guess-word");
guessWord.classList.add("opacity");

//The characters
const letterA = document.getElementById("a");
const letterB = document.getElementById("b");
const letterC = document.getElementById("c");
const letterD = document.getElementById("d");
const letterE = document.getElementById("e");
const letterF = document.getElementById("f");
const letterG = document.getElementById("g");
const letterH = document.getElementById("h");
const letterI = document.getElementById("i");
const letterJ = document.getElementById("j");
const letterK = document.getElementById("k");
const letterL = document.getElementById("l");
const letterM = document.getElementById("m");
const letterN = document.getElementById("n");
const letterO = document.getElementById("o");
const letterP = document.getElementById("p");
const letterQ = document.getElementById("q");
const letterR = document.getElementById("r");
const letterS = document.getElementById("s");
const letterT = document.getElementById("t");
const letterU = document.getElementById("u");
const letterV = document.getElementById("v");
const letterW = document.getElementById("w");
const letterX = document.getElementById("x");
const letterY = document.getElementById("y");
const letterZ = document.getElementById("z");

//Array of each characters w/ DOM
const allChar = document.querySelectorAll(".char");

//List of words that needs to be guessed
//const listWords = {
//house:// ["H", "O", "U", "S", "E"],
//computer: ["C", "O", "M", "P", "U", "T", "E", "R"],
/*background: "BACKGROUND",
  earth: "EARTH",
  weakling: "WEAKLING",
  welcoming: "WELCOMING",
  nightmare: "NIGHTMARE",
  onion: "ONION",
  country: "COUNTRY",
  friends: "FRIENDS",
};*/

const house = ["H", "O", "U", "S", "E"];
const computer = ["C", "O", "U", "T", "E", "R"];

//Playing button changes on click

startGame.addEventListener("click", function () {
  startGameText.textContent = "Playing...";
  startGameText.style.left = "100%";
  startGameText.style.top = "60%";
  playbtn.classList.remove("fa-solid", "fa-play", "fa-5x");
  playbtn.classList.add("fa-solid", "fa-person-digging", "fa-4x");
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

//If button is clicked, then change background to black

function changeCharacterColor() {}

//Function that adds bodyparts to hangman as player gets the character wrong

function addBodyPart(arr, i) {
  if (arr.includes(String(allChar[i].textContent))) {
    guessWord.classList.remove("opacity");
    guessWord.textContent += `${allChar[i].textContent}`;
  } else if (rope.classList.contains("opacity")) {
    rope.classList.remove("opacity");
  } else if (head.classList.contains("opacity")) {
    head.classList.remove("opacity");
  } else if (neck.classList.contains("opacity")) {
    neck.classList.remove("opacity");
  } else if (body.classList.contains("opacity")) {
    body.classList.remove("opacity");
  } else if (rightArm.classList.contains("opacity")) {
    rightArm.classList.remove("opacity");
  } else if (leftArm.classList.contains("opacity")) {
    leftArm.classList.remove("opacity");
  } else if (leftFoot.classList.contains("opacity")) {
    leftFoot.classList.remove("opacity");
  } else if (rightFoot.classList.contains("opacity")) {
    rightFoot.classList.remove("opacity");
  }
}

//function that holds the logic of the game together

function guessTheWord(arr) {
  //const randomWord = arr[Math.floor(Math.random() * arr.length)];
  console.log(arr);

  for (let i = 0; i < allChar.length; i++) {
    allChar[i].addEventListener("click", function () {
      allChar[i].style.background = "url(black.jpg)";
      allChar[i].style.pointerEvents = "none";

      addBodyPart(arr, i);
      /*
      if (arr.includes(String(allChar[i].textContent))) {
        guessWord.classList.remove("opacity");
        guessWord.textContent += `${allChar[i].textContent}`;
      } else if (rope.classList.contains("opacity")) {
        rope.classList.remove("opacity");
      } else if (head.classList.contains("opacity")) {
        head.classList.remove("opacity");
      } else if (neck.classList.contains("opacity")) {
        neck.classList.remove("opacity");
      } else if (body.classList.contains("opacity")) {
        body.classList.remove("opacity");
      } else if (rightArm.classList.contains("opacity")) {
        rightArm.classList.remove("opacity");
      } else if (leftArm.classList.contains("opacity")) {
        leftArm.classList.remove("opacity");
      } else if (leftFoot.classList.contains("opacity")) {
        leftFoot.classList.remove("opacity");
      } else if (rightFoot.classList.contains("opacity")) {
        rightFoot.classList.remove("opacity");
      } */
    });
  }
}

guessTheWord(computer);
