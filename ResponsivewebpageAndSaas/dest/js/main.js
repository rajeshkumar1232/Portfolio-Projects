//Select dom Item
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
/*we user use querselectorall and put into nodeList simmlar to array*/
const navItem = document.querySelectorAll(".nav-item");

// set initial state of menu
let showMenu = false; /* using let to danamic value const is constant*/

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(itm => itm.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(itm => itm.classList.remove("show"));
    showMenu = false;
  }
}
