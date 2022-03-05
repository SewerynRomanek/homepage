{
    const welcome = () => {
        console.log("Hello World!")
    };
    welcome()
    const onBacgroundClick = () => {
        const body = document.querySelector(".js-body");
        const section = document.querySelector(".js-section");
        const border = document.querySelector(".js-article__header");
        const backgroundText = document.querySelector(".js-navigation_background");
        body.classList.toggle("body--background");
        border.classList.toggle("article__header--border");
        section.classList.toggle("section--background");
        if (body.classList.contains("body--background")) {
            backgroundText.innerText = "Ciemny Motyw";
        } else {
            backgroundText.innerText = "Biały Motyw";
        }
    };
    const backgroundButton = document.querySelector(".js-navigation__buttonBackground");
    backgroundButton.addEventListener("click", onBacgroundClick);
}