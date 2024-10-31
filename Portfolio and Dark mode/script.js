let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("night");
    banner.classList.toggle("night");
});

let typingEffect = new Typed("#text", {
    strings: [
        "Vikas", 
        "the Coder", 
        "UI/UX Designer", 
        "a Creative Thinker", 
        "a Problem Solver", 
        "an Enthusiast Learner", 
        "a Web Developer", 
        "a Tech Lover"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
});
