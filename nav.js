var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  tl.from("li", {
    y: 40,
    opacity: 0,
    stagger: 0.25,
  });
});
