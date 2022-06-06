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
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    logo.style.visibility = "visible";
    h2.style.visibility = "visible";
    header.style.height = "auto";
  } else {
    logo.style.visibility = "hidden";
    h2.style.visibility = "hidden";
    header.style.height = "0";
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

const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#ad6c6c";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Envoi de votre message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "mail.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("required") != -1 ||
        response.indexOf("valid") != -1 ||
        response.indexOf("failed") != -1
      ) {
        statusTxt.style.color = "rgb(190, 57, 57)";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 2000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
