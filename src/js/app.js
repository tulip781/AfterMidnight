import '../scss/app.scss';

const flasher = document.getElementById("flash");
const land = document.querySelectorAll('.land');
const opener = document.querySelector(".opener");
const hovertexts = document.querySelectorAll('.bottom-left');



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
"habitational",
"with",
"from",
"near",
'behind',
'into',
'towards',
'since',
'within',
'via',
'opposite',
'inside',
'as']

var myVar = setInterval(setColor, 100);

function setColor() {
  flasher.innerHTML = words[Math.floor(Math.random() * words.length)]
}
function kill() {
  opener.style.display = 'none';
  opener.style.zindex = '-1000';
  console.log(opener.style.zindex);
}

function yo() {
  flasher.classList.add('fade-out');
  window.setTimeout( kill, 2100);
}


window.setTimeout(stopColor, 2000);

function stopColor() {
  clearInterval(myVar);
  land.forEach((lan) => {
    lan.classList.add('fade-in');
  });
  window.setTimeout( yo, 2000);
}

const images = document.querySelectorAll('.imageone');
const textbox = document.querySelectorAll('.textover');



const moveIn = (e) => {
  e.classList.add('active');
  window.setTimeout( () => {
    e.parentElement.style.backgroundColor = '#C6FF00';
  }, 3000);
}

const moveOut = (e) => {
  e.classList.remove('active');
  e.parentElement.style.backgroundColor = 'white';
}

const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    let visible = (window.innerHeight - elemTop) >= (rect.height / 6)
    return visible;
}

const debounce = (func, wait = 20) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const checkSlide = (e) => {
  images.forEach((image) => {
    let test = image.getBoundingClientRect()
    let top = test.top;
    let bottom = test.bottom;
    if (isScrolledIntoView(image)) {
      return moveIn(image);
    } else if (top >= window.innerHeight || bottom <= 0) {
      moveOut(image)
    }
  })
}

var ticker = document.querySelector('.ticker');
var list = document.querySelector('.ticker__list');
var clone = list.cloneNode(true);

ticker.append(clone)

window.addEventListener('scroll', debounce(checkSlide));
checkSlide();
hovertexts.forEach((text) => {
  text.innerText = words.pop()
})
