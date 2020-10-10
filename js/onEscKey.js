import onCloseLightbox from './onCloseLightbox'

function onEscKey(event) {
  if (event.code === "Escape") {
    onCloseLightbox();
  }
}

export default onEscKey;