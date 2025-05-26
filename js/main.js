const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.classList.toggle("active");
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  const sideMenu = document.querySelector(".side-menu");
  sideMenu.classList.remove("active");
});