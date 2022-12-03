let navBtn = document.querySelector(".hamburger");
let navBarList = document.querySelector(" header ul");

navBtn.addEventListener("click", () => {
	navBtn.classList.toggle("is-active");
	navBarList.classList.toggle("shown");
});

// start the animation part

let btn = document.querySelector(".circle_rounded");
let robot = document.querySelector(".robot");
let busines_element = document.querySelectorAll(".busines_element");
let element_testimonilas = document.querySelector(".element_testimonilas");

gsap.from([btn, robot], {
	duration: 3,
	opacity: 0,
});
