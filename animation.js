let animation;

gsap.registerPlugin(ScrollTrigger);

gsap.set("#frame_bottom", { transformOrigin: "50% 50%" });

animation = gsap.to("#frame_bottom", {
  scrollTrigger: {
    start: "top 5%",
    end: "+=7000px",
    scrub: 1,
    markers: false,
    onUpdate: (self) => {
      gsap.to("#frame_bottom", {
        rotation: () => (self.direction === 1 ? 0 : -180),
        overwrite: "auto",
      });
    },
  },
});
