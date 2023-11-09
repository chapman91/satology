const menuToggle = document.getElementById("menu-toggle");
const navMain = document.querySelector(".nav-main");
const connectButton = document.querySelector("connect");

menuToggle.addEventListener("click", () => {
  navMain.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("show-menu");
  }
});
