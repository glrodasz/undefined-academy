const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

  // show menu
  const $navBtn = d.querySelector(".hamburger");
  const $nav = d.querySelector(".navbar");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
      $navBtn.classList.toggle("is-active");
      $nav.classList.toggle("show-navbar");
    }

    if (e.target.matches(".navbar ul li a")) {
      $navBtn.classList.remove("is-active");
      $nav.classList.remove("show-navbar");
    }
  })

  // prevent default submit of form
  d.addEventListener("submit", (e) => {
    e.preventDefault();
  })
})