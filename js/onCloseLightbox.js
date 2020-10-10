import refs from './refs'

const lightboxContentEl = document.querySelector(".lightbox__content img");

function onCloseLightbox() {
  window.removeEventListener("keydown", onEscKey);
  refs.lightbox.classList.remove("is-open");
  lightboxContentEl.src = "";
}

import onEscKey from './onEscKey'

export default onCloseLightbox;