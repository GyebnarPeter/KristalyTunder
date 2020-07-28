// TOGGLE NAV
let navIcon = document.querySelector(".nav-icon");
let header = document.querySelector(".header-wrap");

$(".nav-icon").click(() => {
    $(header).slideToggle();

    header.style.backgroundColor = "black";

    navIcon.classList.contains("nav-icon-rotate")
        ? navIcon.classList.remove("nav-icon-rotate")
        : navIcon.classList.add("nav-icon-rotate")
});


//NAVIGATION
$("nav a").click( function(event) {
    event.preventDefault();

    let id = $(this).attr("href");
    let target = $(id).offset().top - 50;

    $("html").animate({
        scrollTop: target
    }, 800);

    if ($(window).innerWidth() < 900){
        $(".header-wrap").slideToggle();
    }

    navIcon.classList.contains("nav-icon-rotate")
        ? navIcon.classList.remove("nav-icon-rotate")
        : navIcon.classList.add("nav-icon-rotate")
});


$(".main-cover i").click( () => {
    let ourStoryPosition = $(".our-story").offset().top;

    $("html").animate({
        scrollTop: ourStoryPosition
    }, 800);
});


$("footer .fa-chevron-up").click( () => {

    $("html").animate({
        scrollTop: 0
    }, 800);
});

$(".header-logo").click( () => {
    $("html").animate({
        scrollTop: 0
    }, 800);
});


window.onscroll = () => {
    //NAVIGATION SCROLL
    let navi = document.querySelectorAll("nav a");

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

    //RECIPE PART ANIMATION
    let recipesPosition = document.querySelector(".recipes").offsetTop;
    let recipesFirstHead = document.querySelector(".recipes h1");
    let recipesSecondHead = document.querySelector(".recipes h2");

    if (document.documentElement.scrollTop > recipesPosition-300) {
        recipesFirstHead.style.opacity = 1;
        setTimeout(() => {
            recipesSecondHead.style.opacity = 1;
        }, 1000);
    }

    //BLEND PART ANIMATION
    let blendPosition = document.querySelector(".blend").offsetTop;
    let blendFirstHead = document.querySelector(".blend h1");
    let blendSecondHead = document.querySelector(".blend h2");

    if (document.documentElement.scrollTop > blendPosition-300) {
        blendFirstHead.style.opacity = 1;
        setTimeout(() => {
            blendSecondHead.style.opacity = 1;
        }, 1000);
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
