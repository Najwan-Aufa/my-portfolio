const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navLink = document.querySelectorAll('.nav-link')

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}

document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // Dapatkan semua elemen dengan class 'hidden'
    const hiddenCards = document.querySelectorAll('.card.hidden');
  
    // Ubah display dari elemen-elemen tersebut sehingga muncul
    hiddenCards.forEach((card, index) => {
      if (index < 3) { // Misalnya menampilkan 2 card sekaligus
        card.classList.remove('hidden');
      }
    });
  
    // Jika tidak ada lagi card yang tersembunyi, sembunyikan tombol "load more"
    if (document.querySelectorAll('.card.hidden').length === 0) {
      document.getElementById('loadMoreBtn').style.display = 'none';
    }
  });