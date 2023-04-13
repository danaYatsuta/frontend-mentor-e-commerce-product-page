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
    setTimeout(() => {
      lightbox.classList.add('opacity-100');
      lightbox.classList.remove('opacity-0');
    }, 0);
    body.style.setProperty('overflow', 'hidden');

    lightboxImageView.setCurrentImageIndex(mainImageView.currentImageIndex);
  });

  closeButton.addEventListener('click', () => {
    lightbox.classList.add('opacity-0');
    lightbox.classList.remove('opacity-100');
    body.style.removeProperty('overflow');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lightbox.style.setProperty('display', 'none');
    }
  });

  lightbox.addEventListener('transitionend', () => {
    if (lightbox.classList.contains('opacity-0')) {
      lightbox.style.setProperty('display', 'none');
    }
  });
}
