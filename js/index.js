const btnContainer = document.querySelector(".btn-container");

window.addEventListener("scroll", () => {
  if (scrollY > 450) {
    btnContainer.style.transform = "translateX(0)";
    btnContainer.style.opacity = 1;
  }
});
