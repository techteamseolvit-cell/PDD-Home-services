// Imágenes: si existe assets/img/<nombre>.jpg|webp, se usa como fondo del bloque
// con data-image="<nombre>" (hero, problema, equipo). Sin archivo, queda el placeholder.
const IMAGE_EXTENSIONS = ["webp", "jpg", "jpeg", "png"];

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const applyImage = async (el) => {
  const name = el.dataset.image;
  for (const ext of IMAGE_EXTENSIONS) {
    const src = await loadImage(`assets/img/${name}.${ext}`);
    if (src) {
      el.style.backgroundImage = `url("${src}")`;
      el.classList.add("has-image");
      return;
    }
  }
};

document.querySelectorAll("[data-image]").forEach(applyImage);

// Formulario: pendiente de conectar al CRM (GoHighLevel u otro).
// Reemplazar este bloque por el embed del formulario o por un fetch al webhook.
document.querySelectorAll("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    status.textContent = "Formulario aún no conectado. Pendiente de integrar con el CRM.";
  });
});
