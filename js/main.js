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
const headerLinks = document.querySelectorAll('.header-links li a');

// Toggle Between Header Links
headerLinks.forEach((link) => {
  link.addEventListener('click', function () {
    headerLinks.forEach((link) => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// End Header Section
