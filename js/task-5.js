function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");

const handleChangeColor = () => {
  spanColorRef.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
};

buttonChangeColorRef.addEventListener("click", handleChangeColor);
