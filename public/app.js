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
  function scrollToTop() {
    var position =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout('scrollToTop()', 30);
    } else clearTimeout(scrollAnimation);
  }
});
