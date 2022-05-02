var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");
let tl = gsap.timeline();

let menu = document.getElementsByClassName("menu_item");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
  });
}

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  tl.from("li", {
    y: 40,
    opacity: 0,
    stagger: 0.25,
  });
});
