// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContent = document.querySelector('.gallery');
const itemString = renderGalleryItem(galleryItems);
galleryContent.insertAdjacentHTML('beforeend', itemString);

function renderGalleryItem(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
      <img class="gallery__image" src= ${preview} alt=${description} />
    </a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
