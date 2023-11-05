const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show-menu");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("show-menu");
  }
});
