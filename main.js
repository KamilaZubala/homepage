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

createContent(".main-page--js", "Odpowiemy na każdą wiadomość!");
