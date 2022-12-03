"use strict";

var navBtn = document.querySelector(".hamburger");
var navBarList = document.querySelector(" header ul");
navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("is-active");
  navBarList.classList.toggle("shown");
}); // start the animation part

var btn = document.querySelector(".circle_rounded");
var robot = document.querySelector(".robot");
var busines_element = document.querySelectorAll(".busines_element");
var element_testimonilas = document.querySelector(".element_testimonilas");
gsap.from([btn, robot], {
  duration: 3,
  opacity: 0
});