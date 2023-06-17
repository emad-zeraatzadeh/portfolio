const darkLight = document.querySelector(".switch");
const round = document.querySelector(".switch__round");
const fake = document.querySelector(".switch__fake");

darkLight.addEventListener("click", () => {
    round.classList.toggle("switch__round--active");
    fake.classList.toggle("switch__fake--active");
    document.body.classList.toggle("dark-theme");
})

