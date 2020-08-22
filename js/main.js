// Start Window On Scroll Event

window.onscroll = function () {
  // Fix The Header Section On Scrolling
  const docScrollTop = document.documentElement.scrollTop;

  if (docScrollTop > 150) {
    headerSection.classList.add('fixed-header');
  } else {
    headerSection.classList.remove('fixed-header');
  }
};

// End Window On Scroll Event

// Start Header Section

const headerSection = document.querySelector('.header-section');
const headerLinksContainer = document.querySelector('.header-links');
const headerLinks = document.querySelectorAll('.header-links li a');
const mobileMenu = document.querySelector('.mobile-menu');

headerLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    // Remove Active Class
    headerLinks.forEach((link) => {
      link.classList.remove('active');
    });
    // Add Active Class To Clicked Link
    this.classList.add('active');
    // Remove Active Class From Header Links Container
    headerLinksContainer.classList.remove('active');
  });
});

// Sections Scrolling

function scrollFunction(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', (event) => {
      // event.preventDefault();
      document.querySelector(event.target.dataset.section).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

scrollFunction(headerLinks);

// Hide / Show Mobile Menu
mobileMenu.addEventListener('click', function () {
  headerLinksContainer.classList.toggle('active');
});

// End Header Section

// Start Projects Section

const galleryButtons = document.querySelectorAll('.gallery-item button');
let galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages = Array.from(galleryImages);
const popupBoxContainer = document.querySelector('.popup-box-container');
let popupBoxImage = document.querySelector('.popup-box-image');
const closePopupBox = document.querySelector('.close-popup-box');

galleryButtons.forEach((button) => {
  button.addEventListener('click', function (event) {
    const btnDataset = event.currentTarget.dataset.btn;
    const currentImage = galleryImages.find((image) => {
      return image.dataset.image === btnDataset;
    });
    const currentImageSource = currentImage.src;
    const currentImageAlt = currentImage.alt;

    const imageTitle = document.createElement('h3');
    const imageTitleText = document.createTextNode(currentImageAlt);
    imageTitle.appendChild(imageTitleText);
    popupBoxImage.appendChild(imageTitle);

    const imageElement = document.createElement('img');
    imageElement.src = currentImageSource;
    popupBoxImage.appendChild(imageElement);
    popupBoxContainer.style.display = 'flex';
  });
});

closePopupBox.addEventListener('click', function () {
  popupBoxContainer.style.display = 'none';
  popupBoxImage.innerHTML = null;
});
// End Projects Section
