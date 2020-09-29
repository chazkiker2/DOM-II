// Nav Link Events
const navLinks = document.querySelectorAll("a.nav-link");
navLinks.forEach(a => {
  a.addEventListener("mouseover", (e) => {
    a.style.backgroundColor = "black";
    a.style.color = "white";
  });
  a.addEventListener("mouseout", e => {
    a.style.backgroundColor = "transparent";
    a.style.color = "#212529";
  });
  a.addEventListener("click", e => {
    e.preventDefault();
  });
});

