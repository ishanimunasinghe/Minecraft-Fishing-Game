// Minecraft Fishing Stimulator by Ishani Munasinghe

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");
let numNoFishEl = document.getElementById("num-no-fish");
let finalCodEl = document.getElementById("final-cod");
let finalSalmonEl = document.getElementById("final-salmon");
let finalTropicalEl = document.getElementById("final-tropical");
let finalPufferEl = document.getElementById("final-puffer");
let finalNoFishEl = document.getElementById("final-no-fish");
let plus5Btn = document.getElementById("plus5");
let plus50Btn = document.getElementById("plus50");
let until200Btn = document.getElementById("until200");
let until500Btn = document.getElementById("until500");

let codImg = document.getElementById("cod-img");
let salmonImg = document.getElementById("salmon-img");
let tropicalImg = document.getElementById("tropical-img");
let pufferImg = document.getElementById("puffer-img");
let bookImg = document.getElementById("book-img");

let welcomeScreen = document.getElementById("welcome-screen");
let gameScreen = document.getElementById("game-screen");
let endScreen = document.getElementById("end-screen");
let waterBkgd = document.getElementById("water");
let goFishingBtn = document.getElementById("go-fishing-btn");
let replayBtn = document.getElementById("replay-btn");

// hide game screen and end screen on starting page
gameScreen.style.display = "none";
endScreen.style.display = "none";

// Initiate switch from starting screen to gaming screen
goFishingBtn.onclick = function () {
  if (welcomeScreen.style.display !== "none") {
    // reset variables
    numCod = 0;
    numSalmon = 0;
    numTropical = 0;
    numPuffer = 0;
    numNoFish = 0;
    timeLeft = 16;
    numCodEl.innerHTML = numCod;
    numSalmonEl.innerHTML = numSalmon;
    numTropicalEl.innerHTML = numTropical;
    numPufferEl.innerHTML = numPuffer;
    numNoFishEl.innerHTML = numNoFish;
    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    endScreen.style.display = "none";
    countdown();
  } else {
    welcomeScreen.style.display = "block";
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
  }
};

// Go back to main menu
replayBtn.onclick = function () {
  if (welcomeScreen.style.display === "none") {
    welcomeScreen.style.display = "block";
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
  } else {
    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    endScreen.style.display = "block";
  }
};

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let numNoFish = 0;
let timeLeft = 16;

let pauseTime = Math.random() * 5;
let opacityAmountCod = 1;
let opacityAmountSalmon = 1;
let opacityAmountTropical = 1;
let opacityAmountPuffer = 1;
let opacityAmountBook = 1;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);
fishBtnEl.addEventListener("click", fishOnce);
plus5Btn.addEventListener("click", plus5);
plus50Btn.addEventListener("click", plus50);
until200Btn.addEventListener("click", until200);
until500Btn.addEventListener("click", until500);

codImg.addEventListener("click", increaseCountCod);
salmonImg.addEventListener("click", increaseCountSalmon);
tropicalImg.addEventListener("click", increaseCountTropical);
pufferImg.addEventListener("click", increaseCountPuffer);
bookImg.addEventListener("click", increaseCountBook);

// Event Functions
function selectSteve() {
  // Update Active Border
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.remove("active");

  // Update character selection Variable
  character = "Steve";
}

function selectAlex() {
  // Update Active Border
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");
  villagerImgEl.classList.remove("active");

  // Update character selection Variable
  character = "Alex";
}

function selectVillager() {
  // Update Active Border
  steveImgEl.classList.remove("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.add("active");

  // Update character selection Variable
  character = "Villager";
}

function fishOnce() {
  // Test current character

  if (character === "Steve") {
    // Use Steve Probability Distribution for Fishing
    let randNum = Math.random();
    if (randNum < 0.7) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  } else if (character === "Alex") {
    // Use Alex Probability Distribution for Fishing
    let randNum = Math.random();
    if (randNum < 0.1) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  } else {
    // Use Villager Probability Distribution for Fishing
    let randNum = Math.random();
    if (randNum < 0.2) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.35) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.45) {
      numTropical++;
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropicalEl.innerHTML = numTropical;
    } else if (randNum < 0.5) {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    } else {
      numNoFish++;
      imgResultEl.src = "img/Enchanted-Book.png";
      numNoFishEl.innerHTML = numNoFish;
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishOnce();
  }
}

function plus50() {
  for (let n = 1; n <= 50; n++) {
    fishOnce();
  }
}

function until200() {
  let codTarget = numCod + 200;
  while (numCod < codTarget) {
    fishOnce();
  }
}

function until500() {
  let salmonTarget = numSalmon + 500;
  while (numSalmon < salmonTarget) {
    fishOnce();
  }
}

// Fishing game
setInterval(fadeTransitionCod, 300);
setInterval(fadeTransitionSalmon, 300);
setInterval(fadeTransitionTropical, 200);
setInterval(fadeTransitionPuffer, 50);
setInterval(fadeTransitionBook, 50);

function increaseCountCod() {
  numCod++;
  numCodEl.innerHTML = numCod;
  imgResultEl.src = "img/Raw-Cod.png";
  codImg.style.display = "none";
}

function increaseCountSalmon() {
  numSalmon++;
  numSalmonEl.innerHTML = numSalmon;
  imgResultEl.src = "img/Raw-Salmon.png";
  salmonImg.style.display = "none";
}

function increaseCountTropical() {
  numTropical++;
  numTropicalEl.innerHTML = numTropical;
  imgResultEl.src = "img/Tropical-Fish.png";
  tropicalImg.style.display = "none";
}

function increaseCountPuffer() {
  numPuffer++;
  numPufferEl.innerHTML = numPuffer;
  imgResultEl.src = "img/Pufferfish.png";
  pufferImg.style.display = "none";
}

function increaseCountBook() {
  numNoFish++;
  numNoFishEl.innerHTML = numNoFish;
  imgResultEl.src = "img/Enchanted-Book.png";
  bookImg.style.display = "none";
}

function fadeTransitionCod() {
  // Update Variables
  opacityAmountCod = opacityAmountCod - 0.1;
  codImg.style.opacity = opacityAmountCod;

  if (opacityAmountCod < 0) {
    opacityAmountCod = 1;
    codImg.style.top = Math.random() * (500 - 50) + 50 + "px";
    codImg.style.left = Math.random() * (1400 - 400) + 400 + "px";
    codImg.style.display = "block";
  }
}

function fadeTransitionSalmon() {
  // Update Variables
  opacityAmountSalmon = opacityAmountSalmon - 0.1;
  salmonImg.style.opacity = opacityAmountSalmon;

  if (opacityAmountSalmon < 0) {
    opacityAmountSalmon = 1;
    salmonImg.style.top = Math.random() * (500 - 50) + 50 + "px";
    salmonImg.style.left = Math.random() * (1400 - 400) + 400 + "px";
    salmonImg.style.display = "block";
  }
}

function fadeTransitionTropical() {
  // Update Variables
  opacityAmountTropical = opacityAmountTropical - 0.05;
  tropicalImg.style.opacity = opacityAmountTropical;

  if (opacityAmountTropical < 0) {
    opacityAmountTropical = 1;
    tropicalImg.style.top = Math.random() * (500 - 50) + 50 + "px";
    tropicalImg.style.left = Math.random() * (1400 - 400) + 400 + "px";
    tropicalImg.style.display = "block";
  }
}

function fadeTransitionPuffer() {
  // Update Variables
  opacityAmountPuffer = opacityAmountPuffer - 0.05;
  pufferImg.style.opacity = opacityAmountPuffer;

  if (opacityAmountPuffer < 0) {
    opacityAmountPuffer = 1;
    pufferImg.style.top = Math.random() * (500 - 50) + 50 + "px";
    pufferImg.style.left = Math.random() * (1400 - 400) + 400 + "px";
    pufferImg.style.display = "block";
  }
}

function fadeTransitionBook() {
  // Update Variables
  opacityAmountBook = opacityAmountBook - 0.05;
  bookImg.style.opacity = opacityAmountBook;

  if (opacityAmountBook < 0) {
    opacityAmountBook = 1;
    bookImg.style.top = Math.random() * (500 - 50) + 50 + "px";
    bookImg.style.left = Math.random() * (1400 - 400) + 400 + "px";
    bookImg.style.display = "block";
  }
}

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  } else {
    gameScreen.style.display = "none";
    endScreen.style.display = "block";
    finalCodEl.innerHTML = numCod;
    finalSalmonEl.innerHTML = numSalmon;
    finalTropicalEl.innerHTML = numTropical;
    finalPufferEl.innerHTML = numPuffer;
    finalNoFishEl.innerHTML = numNoFish;
  }
}
