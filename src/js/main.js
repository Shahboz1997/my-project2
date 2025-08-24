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


const data = [0,-9,3,4,5,6,7];    
function isThisNumber(value) {
  if (data.includes(value)) {
    console.log("есть");
  }
  else {
    console.log("нет");
  }
}
function possitiveFilter() {
  const copyData = data.slice();
  const filterArray = copyData.filter(item => item>0);
  return filterArray;
}

console.log("data.length", data.length);
if (data.length > 0) {
  console.log("данные есть");
  isThisNumber(5);
  const array = possitiveFilter();
  console.log("array", array);
}  
else {
  console.log("данных нет");
}


const myArray = [1,2,3,4,4,6,-7,-9,0];
console.log("myArray", myArray);

const myArray1 = myArray.filter(function (elem) {
    return (elem !==0);
});
console.log("myArray1", myArray1);


const myArray2 = myArray.map(function(elem){
  return (elem *2);
});
console.log("myArray2", myArray2);

const myArray3 = myArray.filter(function(elem){
  return (elem <0);
});
console.log("myArray3", myArray3);

const newCopy = myArray.slice(3,6);
console.log("newCopy", newCopy);


const arr= [0,2,4,5,6,3,7,8,4,6,9];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

const index = arr.indexOf(3);
console.log("index",index);

function notNull(){
  const copyData = arr.slice();
  const filterArray = copyData.filter(item => item!==0 && item!==6);
  return filterArray;
}
console.log("notNull",notNull());

const withoutTwo = arr.splice(2);
console.log("withoutTwo", withoutTwo);


let user = {
  name:"Jack",
  age:30
}
user.isAdmin = true;
console.log(user);
delete user.age;
console.log(user);
user.age = 34;
console.log(user);
