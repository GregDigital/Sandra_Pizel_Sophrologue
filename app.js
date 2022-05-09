let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");
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

//

let menu = document.getElementsByClassName("menu_item");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("close");
  });
}

// hide logo while scrolling

let lastScroll = 15;
let logo = document.querySelector(".hideLogo");
let h2 = document.querySelector(".hideMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    logo.style.visibility = "visible";
    h2.style.visibility = "visible";
  } else {
    logo.style.visibility = "hidden";
    h2.style.visibility = "hidden";
  }
  // transmet la position quand le scroll est terminé
  return lastScroll;
});
