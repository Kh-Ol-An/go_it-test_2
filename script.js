"use strict";

const input = document.querySelector(".js-input");
const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

boxes.style.display = "flex";
boxes.style.flexFlow = "wrap";

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const createBoxes = amount => {
  let px = 0;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + px}px`;
    div.style.height = `${30 + px}px`;
    div.style.background = `rgb(${randomInteger(0, 255)},
    ${randomInteger(0, 255)},
    ${randomInteger(0, 255)})`;
    boxes.insertAdjacentElement("beforeend", div);
    px += 10;
  }
};

const handleCreate = () => {
  createBoxes(input.value);
};
createBtn.addEventListener("click", handleCreate);

const destroyBoxes = () => {
  boxes.querySelectorAll("*").forEach(item => item.remove());
  input.value = null;
};
destroyBtn.addEventListener("click", destroyBoxes);
