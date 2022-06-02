let burgerMenu = document.querySelector(".menu_toggle");
let overlay = document.getElementById("menu");
let body = document.querySelector("body");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("overlay");
  body.classList.toggle("true");

  if (this.classList.contains("active")) {
    tl.from("li", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
    });
  } else {
    tl.from("li", {
      opacity: 1,
    });
  }
});

//

let menu = document.getElementsByClassName("menu_item");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("active");
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

//form contact

function VerifForm(form) {
  let lastName = document.querySelector("#last").lastName.value;
  console.log(lastName);
  const firstName = document.querySelector("#first").first.value;
  const mail = document.querySelector("#email").email.value;
  const text = document.querySelector("#precision");
  const msg_error = document.querySelector(".error");

  if (lastName == "") {
    document.getElementById("msg_erreur").innerHTML =
      "Veuillez indiquer votre nom !";
    document.getElementById("msg_erreur").style.display = "block";
    document.getElementById("msg_erreur").className = "focus";
    return false;
  } else {
    document.getElementById("msg_erreur").style.display = "none";
  }
  if (mail == "") {
    document.getElementById("msg_erreur").innerHTML =
      "Veuillez indiquer votre e-mail !";
    document.getElementById("msg_erreur").style.display = "block";
    document.getElementById("msg_erreur").className = "focus";

    return false;
  } else {
    document.getElementById("msg_erreur").style.display = "none";
  }

  return true;
}
