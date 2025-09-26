// Pequeño efecto: resalta secciones al hacer scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll(".cv-section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sec.style.backgroundColor = "#f9fcff";
    } else {
      sec.style.backgroundColor = "transparent";
    }
  });
});
