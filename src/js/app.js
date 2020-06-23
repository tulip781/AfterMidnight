import '../scss/app.scss';

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
  window.setTimeout( yo, 2000);
}

const images = document.querySelectorAll('img');



const moveIn = (e) => {
  e.classList.add('active');
}

const moveOut = (e) => {
  e.classList.remove('active');
}

const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    console.log(rect);
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    let visible = (window.innerHeight - elemTop) >= (rect.height / 8)
    return visible;
}

const debounce = (func, wait = 50) => {
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

window.addEventListener('scroll', debounce(checkSlide));
