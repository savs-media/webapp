gsap.to("#logo", {
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom",
        // scrub: "true"
        scrub: 1
    },
    fontSize: 40,
    left: 60,
    top: 25,
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
    color: "rgb(36, 30, 26)",
    duration: 1
});

gsap.to(".nav-item", {
    scrollTrigger: {
        trigger: "#page-2",
        start: "top top",
        end: "bottom",
        scrub: 1
    },
    color: "rgb(36, 30, 26)",    
    duration: 1
});

gsap.to("#logo", {
    scrollTrigger: {
        trigger: "#page-2",
        start: "top top",
        end: "bottom",
        scrub: 1
    },
    color: "rgb(36, 30, 26)",
    duration: 1
});