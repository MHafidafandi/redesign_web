const accordionItems = document.querySelectorAll('.border-b');
accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.accord');
    content.classList.toggle('hidden');
  });
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
console.log(totalItems);

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalItems - 1;
  } else if (index >= totalItems) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel').style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3500);
