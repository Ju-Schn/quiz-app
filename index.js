const bookmarkButton = document.querySelector('[data-js=bookmarkButton]');
const answerButton = document.querySelector('[data-js=answerButton]');
const card = document.querySelector('[data-js=card]');
const cardAnswerTitle = document.querySelector('[data-js=cardAnswerTitle]');
const cardAnswer = document.querySelector('[data-js=cardAnswer');

bookmarkButton.addEventListener('click', () => {
  bookmarkButton.classList.toggle('button__bookmark--bookmarked');
  card.classList.toggle('card--bookmarked');
  answerButton.classList.toggle('button__answer--bookmarked');
});

answerButton.addEventListener('click', () => {
  cardAnswerTitle.classList.toggle('card__answer');
  cardAnswer.classList.toggle('card__answer');
});
