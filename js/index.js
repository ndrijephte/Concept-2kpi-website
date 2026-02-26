const btnContainer = document.querySelector(".btn-container");

window.addEventListener("scroll", () => {
  if (scrollY > 450) {
    btnContainer.style.transform = "translateX(0)";
    btnContainer.style.opacity = 1;
  }
});

// Gestion des transitions
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.href;

    if (!href.includes("#")) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});
