gsap.from(".nlink", {
  stagger: .2,
  y: 10,
  duration: 1.5,
  ease: "power4.out",
  opacity: 0
});

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


Shery.textAnimate("#headings h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: .2,
  duration: 1.5,
  ease: Expo,
  opacity: 0
})

Shery.imageEffect("#imgntext img", {
  style: 3,
  debug: true
})