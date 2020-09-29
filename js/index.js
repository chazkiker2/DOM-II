import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(ScrollTrigger);

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

const divBtns = document.querySelectorAll("div.btn");
console.log(divBtns);
let params = `scrollbars=no, resizable=no, status=no, location=no, toolbar=no, menubar=no, width=550, height=580, left=100, top=100`;
divBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    window.open("https://www.facebook.com/login", "Facebook Login", params);
    window.focus();
  });
});

// /usr/local/lib/node_modules