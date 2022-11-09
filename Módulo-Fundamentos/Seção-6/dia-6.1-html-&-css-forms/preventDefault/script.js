// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function href () {
  HREF_LINK.addEventListener('click', (event) => {
    event.preventDefault(); // suprime o comportamento padrão de um evento
  });
}
href();

function checkbox () {
  INPUT_CHECKBOX.addEventListener('click', (box) => {
    box.preventDefault();
  });
}
checkbox();

function keyPress () {
  INPUT_TEXT.addEventListener('keypress', (press) => {
    const caractere = press.key;
    if (caractere !== 'a') {
    press.preventDefault();
    }
  });
}
keyPress();
