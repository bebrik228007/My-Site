window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let Smoother = ScrollSmoother.create({
  wrapper: 'wrapper',
  content: 'content',
  smooth: 1.2,
});

