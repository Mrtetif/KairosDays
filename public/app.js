// nav bar button

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

// to top button

const btnTop = document.querySelector('.btn-top');
const docScroll = document.body.scrollTop;

window.addEventListener('scroll', function () {
  if (docScroll > 80 || this.document.documentElement.scrollTop > 80) {
    btnTop.classList.remove('none');
  } else {
    btnTop.classList.add('none');
  }
});

btnTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
