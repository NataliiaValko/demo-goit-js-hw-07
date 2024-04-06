function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("#controls input");
const buttonCreateRef = document.querySelector("#controls [data-create]");
const buttonDestroyRef = document.querySelector("#controls [data-destroy]");
const blockBoxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const markup = Array.from({ length: amount }, (_, index) => {
    return `<div style="width: ${30 + 10 * index}px; height: ${
      30 + 10 * index
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }).join("");

  blockBoxesRef.innerHTML = markup;
};

const destroyBoxes = () => (blockBoxesRef.innerHTML = "");

const handleCreateClick = () => {
  const { min, max } = inputRef;
  const value = Number(inputRef.value);

  if (value < min || value > max) {
    inputRef.style.border = "2px solid red";
    return;
  }

  createBoxes(value);
  inputRef.value = "";
};

const handleDestroyClick = () => {
  destroyBoxes();
};

buttonCreateRef.addEventListener("click", handleCreateClick);
buttonDestroyRef.addEventListener("click", handleDestroyClick);
