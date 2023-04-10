{
    const body = document.querySelector(".js-body");

    const pictureRemove = () => {

        const picturePlate = document.querySelector(".js-picturePlate");
        picturePlate.classList.toggle("section__pictureRemove");
    };

    const answerQuestion = () => {

        const paragraphAnswer = document.querySelector(".js-paragraphAnswer");
        paragraphAnswer.innerHTML = "<i>Większe spożycie nienasyconych kwasów tłuszczów</i>";
    };

    const bodyColorChange = () => {
        body.classList.toggle("body--dark");
    };

    const modeColorChange = () => {

        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "biały" : "beżowy";
    };

    const init = () => {

        const buttonRemove = document.querySelector(".js-buttonRemove");
        const buttonQuestion = document.querySelector(".js-buttonQuestion");
        const buttonColorChange = document.querySelector(".js-buttonColorChange");
        const buttonModeChange = document.querySelector(".js-buttonModeChange");
        buttonRemove.addEventListener("click", pictureRemove);
        buttonQuestion.addEventListener("click", answerQuestion);
        buttonColorChange.addEventListener("click", bodyColorChange);
        buttonModeChange.addEventListener("click", modeColorChange);
    }

    init();
}






