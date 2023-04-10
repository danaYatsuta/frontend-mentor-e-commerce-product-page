import images from './images.js';

// TODO inital current image dependant on what image was selected
// before opening lightbox

let currentImage = 0;

function incrementCurrentImage() {
  currentImage = currentImage + 1 === images.length ? 0 : currentImage + 1;
}

function decrementCurrentImage() {
  currentImage = currentImage - 1 === -1 ? images.length - 1 : currentImage - 1;
}

export default function initalizeLightbox(
  lightboxSelector,
  openButtonSelector,
  closeButtonSelector,
  lightboxImageSelector,
  previousButtonSelector,
  nextButtonSelector,
) {
  const lightbox = document.querySelector(lightboxSelector);
  const openButton = document.querySelector(openButtonSelector);
  const closeButton = lightbox.querySelector(closeButtonSelector);

  const lightboxImage = lightbox.querySelector(lightboxImageSelector);
  const previousButton = lightbox.querySelector(previousButtonSelector);
  const nextButton = lightbox.querySelector(nextButtonSelector);

  const radioButtons = lightbox.querySelectorAll(
    'input[name="lightbox-image"]',
  );

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      if (radioButton.checked) {
        currentImage = radioButton.value - 1;
        lightboxImage.setAttribute('src', images[currentImage]);
      }
    });
  });

  openButton.addEventListener('click', () => {
    lightbox.style.removeProperty('display');
  });

  closeButton.addEventListener('click', () => {
    lightbox.style.setProperty('display', 'none');
  });

  nextButton.addEventListener('click', () => {
    incrementCurrentImage();
    lightboxImage.setAttribute('src', images[currentImage]);
    radioButtons[currentImage].checked = true;
  });

  previousButton.addEventListener('click', () => {
    decrementCurrentImage();
    lightboxImage.setAttribute('src', images[currentImage]);
    radioButtons[currentImage].checked = true;
  });
}
