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

export default function initializeImageView(
  imageSelector,
  previousButtonSelector,
  nextButtonSelector,
) {
  const image = document.querySelector(imageSelector);
  const previousButton = document.querySelector(previousButtonSelector);
  const nextButton = document.querySelector(nextButtonSelector);

  const radioButtons = document.querySelectorAll('input[name="product-image"]');

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
      if (radioButton.checked) {
        currentImage = radioButton.value - 1;
        image.setAttribute('src', images[currentImage]);
      }
    });
  });

  nextButton.addEventListener('click', () => {
    incrementCurrentImage();
    image.setAttribute('src', images[currentImage]);
    radioButtons[currentImage].checked = true;
  });

  previousButton.addEventListener('click', () => {
    decrementCurrentImage();
    image.setAttribute('src', images[currentImage]);
    radioButtons[currentImage].checked = true;
  });
}
