{
    const welcome = () => {
        console.log("Hello World!")
    };
    welcome()
    const onCarClick = () => {
        const carLinks = document.querySelector(".js-navigation__listCars");
        carLinks.classList.toggle("navigation__list--hide");
    };
    const carButton = document.querySelector(".js-navigation__buttonCar");
    carButton.addEventListener("click", onCarClick);
    const onGameClick = () => {
        const gameLinks = document.querySelector(".js-navigation__listGames");
        gameLinks.classList.toggle("navigation__list--hide");
    };
    const gameButton = document.querySelector(".js-navigation__buttonGame");
    gameButton.addEventListener("click", onGameClick);
    const onDrinkClick = () => {
        const drinkLinks = document.querySelector(".js-navigation__listDrinks");
        drinkLinks.classList.toggle("navigation__list--hide");
    };
    const drinkButton = document.querySelector(".js-navigation__buttonDrink");
    drinkButton.addEventListener("click", onDrinkClick);
    const onOptionClick = () => {
        const option = document.querySelector(".js-navigation_option")
        option.classList.toggle("navigation--hide")
    };
    const optionButton = document.querySelector(".js-navigation__buttonOption");
    optionButton.addEventListener("click", onOptionClick);
    const onBacgroundClick = () => {
        const main = document.querySelector(".main");
        const backgroundText = document.querySelector(".js-navigation_background");
        main.classList.toggle("main--background");
        if (main.classList.contains("main--background")) {
            backgroundText.innerText = "Szare tło";
        } else {
            backgroundText.innerText = "Białe tło ";
        }
    };
    const backgroundButton = document.querySelector(".js-navigation__buttonBackground");
    backgroundButton.addEventListener("click", onBacgroundClick);
}