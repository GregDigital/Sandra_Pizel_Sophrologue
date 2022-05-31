let burgerMenu = document.querySelector(".menu_toggle");
let overlay = document.getElementById("menu");
let body = document.querySelector("body");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("overlay");
  body.classList.toggle("true");
});

//

// hide logo while scrolling

// Custom cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseover", (e) => {
  let pulse = document.querySelectorAll(".pointer");
  pulse.forEach((elt) => {
    if (e.target == elt) {
      cursor.classList.add("pulse");
    } else if (e.relatedTarget == elt) {
      cursor.classList.remove("pulse");
    }
  });
  return;
});
