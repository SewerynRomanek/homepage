console.log("Hello World!");
let carLinks = document.querySelector(".js-navigation__listCars");
let carButton = document.querySelector(".js-navigation__buttonCar");
carButton.addEventListener("click", () => {
    carLinks.classList.toggle("navigation__list--hide") 
});
let gameLinks = document.querySelector(".js-navigation__listGames");
let gameButton = document.querySelector(".js-navigation__buttonGame");
gameButton.addEventListener("click", () => {
    gameLinks.classList.toggle("navigation__list--hide")
})
let drinkLinks = document.querySelector(".js-navigation__listDrinks");;
let drinkButton = document.querySelector(".js-navigation__buttonDrink");
drinkButton.addEventListener("click", () => {
    drinkLinks.classList.toggle("navigation__list--hide");
});
let optionButton = document.querySelector(".js-navigation__buttonOption");
let option = document.querySelector(".js-navigation_option")
optionButton.addEventListener("click", () => {
    option.classList.toggle("navigation--hide")     
});
let main = document.querySelector(".main")
let backgroundButton = document.querySelector(".js-navigation__buttonBackground")  
let backgroundText = document.querySelector(".js-navigation_background")
backgroundButton.addEventListener("click", () => {
    main.classList.toggle("main--background");
    if (main.classList.contains("main--background")) {
        backgroundText.innerText = "Szare tło";
    } else {
        backgroundText.innerText = "Białe tło ";
    }
})