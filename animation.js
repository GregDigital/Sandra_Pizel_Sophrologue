let animation;

gsap.registerPlugin(ScrollTrigger);

gsap.set("#green", { xPercent: -50 });

var rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#frame_bottom",
      scrub: 0.2,
      start: "top 5%",
      end: "+=8000",
    },
  })
  .to("#frame_bottom", {
    rotation: 360 * 5,
    duration: 1,
    ease: "none",
  });
gsap.set("#frame_right", { right: 50 });

var rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#frame_right",
      scrub: 0.2,
      start: "top 5%",
      end: "+=8000",
    },
  })
  .to("#frame_right", {
    rotation: 360 * 5,
    duration: 1,
    ease: "none",
  });
gsap.set("#frame_left", { left: 50 });

var rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#frame_left",
      scrub: 0.2,
      start: "top 5%",
      end: "+=8000",
    },
  })
  .to("#frame_left", {
    rotation: 360 * 5,
    duration: 2,
    ease: "none",
  });

gsap.set("#frame_top", { top: 50, right: 350 });

var rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#frame_top",
      scrub: 1,
      start: "top top",
      end: "+7000",
    },
  })
  .to("#frame_top", {
    rotation: 360 * 4,
    duration: 1,
    ease: "none",
  });
