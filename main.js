// ========== MENÚ HAMBURGUESA ==========
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // Cambiar ícono
  const icon = menuIcon.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = menuIcon.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});

// ========== WHATSAPP CONFIGURACIÓN ==========
// CAMBIAR ESTE NÚMERO POR EL REAL (código país + número, sin el símbolo +)
const numeroWhatsapp = "51944274551"; // <- REEMPLAZAR AQUÍ

// Botones "PEDIR" en cada plato
const botonesPedir = document.querySelectorAll(".btn-card");
botonesPedir.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".card");
    const nombrePlato =
      card.querySelector("h3")?.innerText || "plato destacado";
    const mensaje = `Hola Kai, quiero pedir: ${nombrePlato}. ¿Me ayudas con el envío?`;
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, "_blank");
  });
});

// Botón VER MENÚ hace scroll suave
const btnMenu = document.querySelector(".btn-cta");
if (btnMenu) {
  btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });
}

// Scroll suave para enlaces internos del navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Actualizar los enlaces de WhatsApp en navbar y sección roja con el número real
const allWhatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
allWhatsAppLinks.forEach((link) => {
  let oldHref = link.getAttribute("href");
  if (oldHref.includes("51999999999")) {
    let newHref = oldHref.replace("51999999999", numeroWhatsapp);
    link.setAttribute("href", newHref);
  }
});

const verMasBtn = document.getElementById("verMasBtn");

verMasBtn.addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll(".card.hidden");

  hiddenCards.forEach((card) => {
    card.classList.remove("hidden");
  });

  verMasBtn.style.display = "none"; // oculta el botón
});
