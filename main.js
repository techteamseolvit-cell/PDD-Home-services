// Images: if assets/img/<name>.jpg|webp exists, it is used as the background of the
// block with data-image="<name>" (hero, problem, team). Without a file, the placeholder stays.
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

// Form: pending CRM connection (GoHighLevel or other).
// Replace this block with the form embed or a fetch to the webhook.
document.querySelectorAll("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    status.textContent = "Form not connected yet. Pending CRM integration.";
  });
});
