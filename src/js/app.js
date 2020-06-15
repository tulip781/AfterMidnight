const flasher = document.getElementById("flash");
const land = document.querySelector('.land');


const words = ["biased",
"tooke",
"viol",
"unreplevinable",
"roadhouse",
"recapping",
"oriel",
"condoled",
"sapour",
"maladaptation",
"cosmorama",
"instigated",
"carapa",
"presolicit",
"jouncing",
"skald",
"nonreformational",
"undepicted",
"habitational"]


var myVar = setInterval(setColor, 100);

function setColor() {
  flasher.innerHTML = words[Math.floor(Math.random() * words.length)]
}

function yo() {
  flasher.classList.add('fade-out');
}
window.setTimeout(stopColor, 2000);

function stopColor() {
  clearInterval(myVar);
  land.classList.add('fade-in');
  window.setTimeout( yo, 1000);
}
