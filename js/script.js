console.log("Buenos días!");

let buttonRemove = document.querySelector(".js-buttonRemove");

let picturePlate = document.querySelector(".js-picturePlate");

let buttonQuestion = document.querySelector(".js-buttonQuestion");

let paragraphAnswer = document.querySelector(".js-paragraphAnswer");

let buttonColorChange = document.querySelector(".js-buttonColorChange");

let body = document.querySelector(".js-body");

let buttonModeChange = document.querySelector(".js-buttonModeChange");

let themeName = document.querySelector(".js-themeName");



buttonRemove.addEventListener("click", () => {
    picturePlate.classList.toggle("section__pictureRemove");
});


buttonQuestion.addEventListener("click", () => {
    paragraphAnswer.innerHTML = "<i>Większe spożycie nienasyconych kwasów tłuszczów</i>";
});

buttonColorChange.addEventListener("click", () => {
    body.classList.toggle("body--dark");
});


buttonModeChange.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "biały" : "beżowy";
});







