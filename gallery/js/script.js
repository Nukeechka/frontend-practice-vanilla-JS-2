const images = document.querySelectorAll(".image-card");
const imageOne = document.querySelector(".one");

const moduleWindow = document.querySelector("#module");
const moduleImage = document.querySelector("#module__img");
const moduleTitle = document.querySelector(".module__title");

const openModule = (el) => {
  console.log(getComputedStyle(el.target).backgroundImage.slice(5, -2));
  console.log(el.target.textContent);
  let url = getComputedStyle(el.target).backgroundImage.slice(5, -2);
  let title = el.target.textContent;
  moduleWindow.style.display = "flex";
  moduleTitle.textContent = title;
  moduleImage.setAttribute("src", url);
};

const closeModule = () => {
  moduleWindow.style.display = "none";
};

images.forEach((image) => {
  image.addEventListener("click", openModule);
});
