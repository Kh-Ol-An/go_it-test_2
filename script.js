"use strict";

const input = document.querySelector(".js-input");
const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
let divs = [];

boxes.style.display = "flex";
boxes.style.flexFlow = "wrap";

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    divs.push(document.createElement("div"));
  }
  let px = 0;
  divs.forEach(div => {
    div.style.width = `${30 + px}px`;
    div.style.height = `${30 + px}px`;
    div.style.background = `rgb(${randomInteger(0, 255)},
    ${randomInteger(0, 255)},
    ${randomInteger(0, 255)})`;
    boxes.insertAdjacentElement("beforeend", div);
    px += 10;
  });
};

const handleCreate = () => {
  createBoxes(input.value);
};
createBtn.addEventListener("click", handleCreate);

const destroyBoxes = () => {
  divs.forEach(div => boxes.removeChild(div));
  divs = [];
  input.value = null;
};
destroyBtn.addEventListener("click", destroyBoxes);
