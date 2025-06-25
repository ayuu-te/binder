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
  //Parameters are optional.
  style: 1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});