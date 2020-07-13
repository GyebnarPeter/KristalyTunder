// TOGGLE NAV
let navIcon = document.querySelector(".nav-icon");

$(".nav-icon").click(() => {
    $(".header-wrap").slideToggle();

    navIcon.classList.contains("nav-icon-rotate")
        ? navIcon.classList.remove("nav-icon-rotate")
        : navIcon.classList.add("nav-icon-rotate")
});