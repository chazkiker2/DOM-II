import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// console.log(ScrollTrigger);

// window load
window.addEventListener("load", () => {
  window.alert("This page has loaded!");
});

// Nav Link Events
const navLinks = document.querySelectorAll("a.nav-link");
navLinks.forEach(a => {
  a.addEventListener("mouseover", () => {
    a.style.backgroundColor = "black";
    a.style.color = "white";
  });
  a.addEventListener("mouseout", () => {
    a.style.backgroundColor = "transparent";
    a.style.color = "#212529";
  });
  a.addEventListener("click", e => {
    e.preventDefault();
  });

});

const headerSection = document.querySelector("header.intro");
headerSection.addEventListener("mouseenter", event => {
  headerSection.style.border = "2px solid black";
});
headerSection.addEventListener("mouseleave", event => {
  headerSection.style.border = "0";
  headerSection.style.borderBottom = "2px dashed #C0C0C0";
});

// Sign Up Buttons
const divBtns = document.querySelectorAll("div.btn");
// console.log(divBtns);
let params = `scrollbars=no, resizable=no, status=no, location=no, toolbar=no, menubar=no, width=550, height=580, left=100, top=100`;
let openedWindow;
divBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    openedWindow = window.open("https://www.facebook.com/login", "Facebook Login", params);
    openedWindow.focus();

    openedWindow.addEventListener("keydown", e => {
      e.stopPropagation();
      if (e.key === "Escape") {
        openedWindow.close();
      }
    });
  });
});


window.addEventListener("resize", () => {
  setTimeout(window.alert(`"Your window size has changed! Width: ${window.innerWidth}, Height: ${window.innerHeight}`), 8000);  
});


