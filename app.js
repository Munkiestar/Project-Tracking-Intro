const hamburgerBtn = document.querySelector('#hamburger');
const list = document.querySelector('#list');

const hamIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');

hamburgerBtn.addEventListener('click', () => {
  if (!list.classList.contains('show-menu')) {
    list.classList.add('show-menu');
    hamIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    list.classList.remove('show-menu');
    hamIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
