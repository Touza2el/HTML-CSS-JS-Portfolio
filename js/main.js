// Start Window On Scroll Event

window.onscroll = function () {
  // Fix The Header Section On Scrolling
  const docScrollTop = document.documentElement.scrollTop;

  if (docScrollTop > 150) {
    headerSection.classList.add('fixed-header');
  } else {
    headerSection.classList.remove('fixed-header');
  }

  // Animate Skills Progress On Scrolling

  const mySkillsSection = document.querySelector('.my-skills-section');
  let mySkillsSectionOffsetTop = mySkillsSection.offsetTop;
  let mySkillsSectionOffsetHeight = mySkillsSection.offsetHeight;
  let windowInnerHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let mySkills = document.querySelectorAll('.skill-progress span');
  if (
    windowScrollTop >
    mySkillsSectionOffsetTop + mySkillsSectionOffsetHeight - windowInnerHeight
  ) {
    mySkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
      skill.innerText = skill.dataset.progress;
    });
  } else {
    mySkills.forEach((skill) => {
      skill.style.width = '0';
      skill.innerText = '';
    });
  }
};

// End Window On Scroll Event

// Start Header Section

const headerSection = document.querySelector('.header-section');
const headerLinksContainer = document.querySelector('.header-links');
const headerLinks = document.querySelectorAll('.header-links li a');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle Between Header Links
headerLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    headerLinks.forEach((link) => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Hide / Show Mobile Menu
mobileMenu.addEventListener('click', function () {
  headerLinksContainer.classList.toggle('active');
});

// End Header Section

// Start Gallery Section

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
    console.log(popupBoxContainer);
  });
});

closePopupBox.addEventListener('click', function () {
  popupBoxContainer.style.display = 'none';
  popupBoxImage.innerHTML = null;
});
// End Gallery Section
