// main.js
function loadMore() {
    if (window.innerWidth < 768) { // Check if the screen width is less than 768px
        const hiddenCards = document.querySelectorAll('.card.hidden');
        hiddenCards.forEach((card, index) => {
            if (index < 3) {
                card.classList.remove('hidden');
            }
        });

        const remainingHiddenCards = document.querySelectorAll('.card.hidden').length;
        if (remainingHiddenCards === 0) {
            document.querySelector('.load-more').style.display = 'none';
        }

        adjustHeaderHeight();
    }
}

function adjustHeaderHeight() {
    if (window.innerWidth < 768) { // Check if the screen width is less than 768px
        const header = document.querySelector('.full-screen-header3');
        const cards = document.querySelectorAll('.full-screen-header3 .card');
        const cardHeight = cards[0].offsetHeight;
        const totalRows = Math.ceil(cards.length / 1); // assuming 1 card per row in mobile view
        const newHeight = totalRows * (cardHeight + 20) + 200; // +200 for extra spacing, adjust as needed

        header.style.height = `${newHeight}px`;
    }
}

document.querySelector(".load-more").addEventListener("click", function () {
    document.querySelectorAll(".card.hidden").forEach(function (card, index) {
      if (index < 3) {
        card.classList.remove("hidden");
      }
    });
    this.style.display = "none";
  });

  document.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 50) {
            reveal.classList.add('visible');
        }
    });
});
