



const lightboxContentEl = document.querySelector(".lightbox__content img");

function addLightboxContent(evt) {
  lightboxContentEl.src = evt.target.dataset.source;
  lightboxContentEl.alt = evt.target.alt;
}

export default addLightboxContent;