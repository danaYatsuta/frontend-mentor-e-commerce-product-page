import ImageView from './image-view.js';

export default function initalizeLightbox(mainImageView) {
  const lightboxImageView = new ImageView(
    '#lightbox-image',
    '#lightbox-previous-button',
    '#lightbox-next-button',
    'lightbox-image',
  );

  const lightbox = document.querySelector('#lightbox');
  const openButton = document.querySelector('#open-lightbox-button');
  const closeButton = lightbox.querySelector('#close-lightbox-button');

  openButton.addEventListener('click', () => {
    lightbox.style.removeProperty('display');
    lightboxImageView.setCurrentImageIndex(mainImageView.currentImageIndex);
  });

  closeButton.addEventListener('click', () => {
    lightbox.style.setProperty('display', 'none');
  });
}
