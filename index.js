const bookmarkButton = document.querySelector('[data-js=bookmarkButton]');

bookmarkButton.addEventListener('click', () => {
  bookmarkButton.classList.toggle('button__bookmark--bookmarked');
});
