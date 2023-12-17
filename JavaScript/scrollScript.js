gsap.to("#logo", {
    scrollTrigger: {
        trigger: "main",
        // start: 1,
        // scrub: "true"
        scrub: 1
    },
    fontSize: 6,
    top: -100,
    left: -100,
    color: "rgb(36, 30, 26)",
    duration: 1
});

gsap.to(".nav-item", {
    scrollTrigger: {
        trigger: "main",
        scrub: 1
    },
    color: "rgb(36, 30, 26)"
});