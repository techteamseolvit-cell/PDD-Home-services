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

// Third-party embeds (the GoHighLevel form script) can append in-flow elements after the footer,
// which shows up as an empty band under it. Hide those; fixed/absolute widgets are left alone.
const FOOTER_SELECTOR = ".footer";
const IGNORED_TAGS = new Set(["SCRIPT", "STYLE", "LINK", "NOSCRIPT", "TEMPLATE"]);

const hideStrayBlocks = () => {
  const footer = document.querySelector(FOOTER_SELECTOR);
  if (!footer) return;
  for (let el = footer.nextElementSibling; el; el = el.nextElementSibling) {
    if (IGNORED_TAGS.has(el.tagName)) continue;
    const position = getComputedStyle(el).position;
    if (position === "static" || position === "relative") el.style.setProperty("display", "none", "important");
  }
};

hideStrayBlocks();
new MutationObserver(hideStrayBlocks).observe(document.body, { childList: true });

// Sticky header: sit below the WordPress admin bar only when that bar is visible and fixed
// (hidden in the Elementor editor, and not fixed on small screens).
const syncStickyTop = () => {
  const bar = document.getElementById("wpadminbar");
  const visible = bar && getComputedStyle(bar).display !== "none" && getComputedStyle(bar).position === "fixed";
  document.documentElement.style.setProperty("--pdd-sticky-top", visible ? bar.offsetHeight + "px" : "0px");
};

syncStickyTop();
window.addEventListener("resize", syncStickyTop);
