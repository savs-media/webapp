gsap.to("#logo", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom",
        // scrub: "true"
        scrub: 1
    },
    fontSize: 70,
    left: 0,
    top: 0,
    color: "rgb(36, 30, 26)",
    duration: 1
});

gsap.to(".nav-item", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom",
        // scrub: "true"
        scrub: 1
    },
    color: "rgb(36, 30, 26)"
});