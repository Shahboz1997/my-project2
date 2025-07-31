const headerWrapper = document.querySelector(".header-wrapper");
const menuWrapper = headerWrapper.querySelector(".menu-wrapper");
const burger = headerWrapper.querySelector(".burger");
const closeButton = headerWrapper.querySelector(".button-close");

burgerBtnClickHandler = () => {
  menuWrapper.classList.add("d-flex");
  menuWrapper.classList.remove("d-none");
};

btnCloseClickHandler = () => {
  menuWrapper.classList.remove("d-flex");
  menuWrapper.classList.add("d-none");
};
if (window.innerWidth < 1000) {
  console.log("mobile");
  menuWrapper.classList.remove("d-flex");
  menuWrapper.classList.add("d-none");

  burger.classList.remove("d-none");
  burger.classList.add("d-flex");

  burger.addEventListener("click", burgerBtnClickHandler);
  closeButton.addEventListener("click", btnCloseClickHandler);
}
console.log("Hello world");
const surveyContainer = document.querySelector(".medium");
const surveyCollection = surveyContainer.querySelectorAll(".more-information");
surveyCollection.forEach((information) => {
  information.addEventListener("click", (evt) => {
    const lorem = information.querySelector(".survey-text");
    if (lorem.classList.contains("d-none")) {
      lorem.classList.remove("d-none");
    } else {
      lorem.classList.add("d-none");
    }
  });
});

const form = document.querySelector(".footer__mail");
const input = form.querySelector(".footer_email");
const button = form.querySelector(".button-submit");
let inputVal = false;

input.addEventListener("input", (evt) => {
  inputVal = input.value;
});

button.addEventListener("click", (evt) => {
  console.log("send", inputVal);
});
