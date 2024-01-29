const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.nav-links');

navBtn.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
  } else {
    links.classList.add('show-links');
  }
});

const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
