// TOGGLE NAV
let navIcon = document.querySelector(".nav-icon");
let header = document.querySelector(".header-wrap");

$(".nav-icon").click(() => {
    $(".header-wrap").slideToggle();

    header.style.backgroundColor = "black";

    navIcon.classList.contains("nav-icon-rotate")
        ? navIcon.classList.remove("nav-icon-rotate")
        : navIcon.classList.add("nav-icon-rotate")
});


//NAVIGATION SCROLL
let navi = document.querySelectorAll("nav a");

window.onscroll = () => {

    if (document.documentElement.scrollTop > 100) {

        header.classList.add("header-background");
        header.style.color = "black";

        for (let i = 0; i < navi.length; ++i) {
            navi[i].style.color = "black";
        }
        
    } else {
    
        header.style.color = "white";
        header.classList.remove("header-background");

        for (let i = 0; i < navi.length; ++i) {
            navi[i].style.color = "white";
        }
    }      
};


//COVER ANIMATION
let firstWelcomeText = document.querySelector(".main-cover h1");
let secondWelcomeText = document.querySelector(".main-cover h4");
let coverLine = document.querySelector(".cover-text-underline");
let coverButton = document.querySelector(".main-cover button");

let coverAnimation = () => {

    setTimeout( () => {
        coverLine.style.opacity = 1;
    }, 1000)

    setTimeout( () => {
        firstWelcomeText.style.opacity = 1;
    }, 2000)

    setTimeout( () => {
        secondWelcomeText.style.opacity = 1;
    }, 3000)

    setTimeout( () => {
        coverButton.style.opacity = 1;
    }, 4000)
}

coverAnimation();


//RECIPE PART ANIMATION
let recipe = document.querySelector(".recipes");
let recipesPosition = document.querySelector(".recipes").offsetTop;
let recipesFirstHead = document.querySelector(".recipes h1");
let recipesSecondHead = document.querySelector(".recipes h2");

recipe.onwheel = () => {
    if (document.documentElement.scrollTop > recipesPosition-300) {
        recipesFirstHead.style.opacity = 1;
        setTimeout(() => {
            recipesSecondHead.style.opacity = 1;
        }, 1000);
    }
}


