document.addEventListener("DOMContentLoaded", function () {



const toogle = document.getElementById("tg");

const colorToggle = document.getElementById("colorToggle");
const body = document.body;

colorToggle.addEventListener("click", function () {
    body.classList.toggle("color-normal");
    body.classList.toggle("color-alt");
});
});



