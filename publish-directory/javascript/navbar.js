const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");
const connectButton = document.querySelector("connect");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("show-menu");
  }
});
