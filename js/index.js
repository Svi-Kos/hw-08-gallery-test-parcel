// додаю галерею

import gallery from "./gallery-items.js";

import makeGalleryItemMarkup from './makeGalleryItemMarkup';

const imageGalleryContainer = document.querySelector(".js-gallery");

const makeGalleryMarkup = gallery.map(makeGalleryItemMarkup).join("");

imageGalleryContainer.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

// оверлей контент

imageGalleryContainer.addEventListener("click", addLightboxContent);

import addLightboxContent from './addLightboxContent'

// закрити відкрити модальне вікно

import refs from './refs';

imageGalleryContainer.addEventListener("click", onOpenLightbox);
refs.closeLightbox.addEventListener("click", onCloseLightbox);
refs.overlay.addEventListener("click", onOverlayClick);

import onOpenLightbox from './onOpenLightbox';

import onCloseLightbox from './onCloseLightbox'

import onOverlayClick from './onOverlayClick'

import onEscKey from './onEscKey'





