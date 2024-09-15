// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// klik di luar sidebar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Modal box 1
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButtons1 = document.querySelectorAll('.item-detail-button1');

itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal untuk modal 1
document.querySelector('#item-detail-modal1 .close-icon').onclick = (e) => {
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal untuk modal 1
window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = 'none';
  }
});

// Modal box 2
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButtons2 = document.querySelectorAll('.item-detail-button2');

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal untuk modal 2
document.querySelector('#item-detail-modal2 .close-icon').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal untuk modal 2
window.addEventListener('click', (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = 'none';
  }
});
