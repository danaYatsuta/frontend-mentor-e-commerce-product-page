import ImageView from './image-view.js';

export default function initalizeLightbox(mainImageView) {
  const body = document.querySelector('body');
  const lightbox = document.querySelector('#lightbox');
  const openButton = document.querySelector('#open-lightbox-button');
  const closeButton = lightbox.querySelector('#close-lightbox-button');

  const lightboxImageView = new ImageView(
    '#lightbox-image',
    '#lightbox-previous-button',
    '#lightbox-next-button',
    'lightbox-image',
  );

  openButton.addEventListener('click', () => {
    lightbox.style.removeProperty('display');
    body.style.setProperty('overflow', 'hidden');
    lightboxImageView.setCurrentImageIndex(mainImageView.currentImageIndex);
  });

  closeButton.addEventListener('click', () => {
    lightbox.style.setProperty('display', 'none');
    body.style.removeProperty('overflow');
  });
}
