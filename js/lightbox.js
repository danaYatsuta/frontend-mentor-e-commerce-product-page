export default function initalizeLightbox(
  lightboxSelector,
  productImageSelector,
  closeButtonSelector,
) {
  const lightbox = document.querySelector(lightboxSelector);
  const productImage = document.querySelector(productImageSelector);
  const closeButton = document.querySelector(closeButtonSelector);

  productImage.addEventListener('click', () => {
    lightbox.style.removeProperty('display');
  });

  closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}
