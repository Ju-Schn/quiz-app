const bookmarkButton = document.querySelectorAll('[data-js=bookmarkButton]');
const card = document.querySelector('[data-js=card]');
const answerButton = document.querySelector('[data-js=answerButton]');

bookmarkButton.addEventListener('click', () => {
  bookmarkButton.classList.toggle('button__bookmark--bookmarked');
  card.classList.toggle('card--bookmarked');
  answerButton.classList.toggle('button__answer--bookmarked');
});
