// Toggle class active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
};

// Toggle class active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen untuk menghilangkan nav

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

document.addEventListener("click", function (e) {
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});

document,
  addEventListener("click", function (e) {
    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove("active");
    }
  });

// Modal Box
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailModal5 = document.querySelector('#item-detail-modal5');

const itemDetailButton1 = document.querySelector('.item-detail-button1');
const itemDetailButton2 = document.querySelector('.item-detail-button2');
const itemDetailButton3 = document.querySelector('.item-detail-button3');
const itemDetailButton4 = document.querySelector('.item-detail-button4');
const itemDetailButton5 = document.querySelector('.item-detail-button5');


itemDetailButton1.addEventListener('click', (e) => {
  itemDetailModal1.style.display = 'flex';
  e.preventDefault();
});

itemDetailButton2.addEventListener('click', (e) => {
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();
});

itemDetailButton3.addEventListener('click', (e) => {
  itemDetailModal3.style.display = 'flex';
  e.preventDefault();
});

itemDetailButton4.addEventListener('click', (e) => {
  itemDetailModal4.style.display = 'flex';
  e.preventDefault();
});

itemDetailButton5.addEventListener('click', (e) => {
  itemDetailModal5.style.display = 'flex';
  e.preventDefault();
});



// klik tombol close modal
let modals = document.querySelectorAll('.modal')
let closeIcons = document.querySelectorAll('.close-icon')

closeIcons.forEach((icn) => {
  icn.onclick = (e) => {
    modals.forEach((modal) => {
       modal.style.display = 'none';
      })
      e.preventDefault();
   };

});

// klik di luar modal
window.onclick = (e) => {
  modals.forEach((modal) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
};