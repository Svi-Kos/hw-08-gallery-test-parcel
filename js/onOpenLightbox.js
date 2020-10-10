import refs from './refs'

function onOpenLightbox(event) {
  window.addEventListener("keydown", onEscKey);
  refs.lightbox.classList.add("is-open");
  event.preventDefault();
}

import onCloseLightbox from './onCloseLightbox'

import onEscKey from './onEscKey'

export default onOpenLightbox;