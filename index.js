const bookmarkButtons = document.querySelectorAll('[data-js=bookmarkButton]');
const answerButton = document.querySelector('[data-js=answerButton]');
const cards = document.querySelectorAll('[data-js=card]');
const cardAnswerTitle = document.querySelector('[data-js=cardAnswerTitle]');
const cardAnswer = document.querySelector('[data-js=cardAnswer');

bookmarkButtons.forEach(bookmarkButton => {
  bookmarkButton.addEventListener('click', () => {
    bookmarkButton.classList.toggle('button__bookmark--bookmarked');
    cards.forEach(card => {
      card.classList.toggle('card--bookmarked');
    });

    answerButton.classList.toggle('button__answer--bookmarked');
  });
});

answerButton.addEventListener('click', () => {
  cardAnswerTitle.classList.toggle('card__answer');
  cardAnswer.classList.toggle('card__answer');
});
