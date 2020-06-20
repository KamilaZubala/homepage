const name = "Kamila Zubala";
const age = 33;

function greet(name, age) {
  console.log(
    `Witaj, nazywam się ${name} i mam ${age} lata. Jestem właścicielką kaktusiarniokawiarni Kaktus na dłoni.`
  );
}

greet(name, age);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

if (document.querySelector(".main-page--js")) {
createContent(".main-page--js", "Odpowiemy na każdą wiadomość!");
}

const humanOne = {
  name: 'Kamila',
  age: 33,
  address: {
    city: 'London',
    country: 'UK'
  }
}

const humanTwo = {
  name: 'Zuzanna',
  age: 31,
  address: {
    city: 'Lublin',
    country: 'Poland'
  }
}

if (humanOne.age > humanTwo.age) {
  console.log('Kamila jest starsza');
}
  else if (humanOne.age < humanTwo.age) {
  console.log('Zuzanna jest starsza');
  } 
else if (humanOne.age === humanTwo.age) {
  console.log('Są w tym samym wieku');
}

const myNumber = {name: 'Kamila'};

switch (myNumber) {
  case 5:
    console.log ('Jestem piątką');
    break;
    case 7:
      console.log ('Jestem siódemką');
      break;
      default:
      console.log ('Jestem czymś innym');
}

(100 > 50) ? console.log('To prawda') : console.log('To nieprawda');

const result = (100 > 50) ? {name: 'Kamila'} : false;

console.log(result);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})
