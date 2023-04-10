import images from './images.js';

export default class ImageView {
  constructor(
    imageSelector,
    previousButtonSelector,
    nextButtonSelector,
    radioButtonsName,
  ) {
    this.image = document.querySelector(imageSelector);
    this.previousButton = document.querySelector(previousButtonSelector);
    this.nextButton = document.querySelector(nextButtonSelector);
    this.radioButtons = document.querySelectorAll(
      `input[name="${radioButtonsName}"]`,
    );

    this.currentImageIndex = 0;

    this.radioButtons.forEach((radioButton) => {
      radioButton.addEventListener('click', () => {
        if (radioButton.checked) {
          this.setCurrentImageIndex(radioButton.value - 1);
        }
      });
    });

    this.previousButton.addEventListener('click', () => {
      this.setCurrentImageIndex(this.currentImageIndex - 1);
    });

    this.nextButton.addEventListener('click', () => {
      this.setCurrentImageIndex(this.currentImageIndex + 1);
    });
  }

  setCurrentImageIndex(newCurrentImageIndex) {
    if (newCurrentImageIndex < 0) {
      this.currentImageIndex = images.length - 1;
    } else {
      this.currentImageIndex = newCurrentImageIndex % images.length;
    }

    this.radioButtons[this.currentImageIndex].checked = true;
    this.image.setAttribute('src', images[this.currentImageIndex]);
  }
}
