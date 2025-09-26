
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


function toggleDetalle(el) {
  const detalle = el.nextElementSibling;
  const flecha = el.querySelector(".flecha");
  const abierto = detalle.style.display === "block";

  // Cierra todos los demás
  document.querySelectorAll(".detalle").forEach(d => d.style.display = "none");
  document.querySelectorAll(".flecha").forEach(f => f.classList.remove("abierto"));

  // Si no estaba abierto, abre este
  if (!abierto) {
    detalle.style.display = "block";
    flecha.classList.add("abierto");
  }
}