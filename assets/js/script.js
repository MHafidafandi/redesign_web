const accordionItems = document.querySelectorAll('.border-b');
accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.accord');
    content.classList.toggle('hidden');
  });
});
