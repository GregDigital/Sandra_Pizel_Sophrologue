let burgerMenu = document.querySelector(".menu_toggle");
let overlay = document.getElementById("menu");
let body = document.querySelector("body");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("overlay");
  body.classList.toggle("true");

  /*tl.from("li", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
  });*/
});

//

let menu = document.getElementsByClassName("menu_item");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("on");
    body.classList.toggle("true");

    tl.from("li", {
      opacity: 1,
    });
  });
}

// hide logo while scrolling

let lastScroll = 20;
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

// Custom cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("pulse");

  setTimeout(() => {
    cursor.classList.remove("pulse");
  }, 500);
});
