export default function answer() {
  const cardAnswerTitle = document.querySelector('[data-js=cardAnswerTitle]');
  const cardAnswer = document.querySelector('[data-js=cardAnswer');
  const answerButtons = document.querySelectorAll('[data-js=answerButton]');

  answerButtons.forEach(answerButton => {
    answerButton.addEventListener('click', () => {
      cardAnswerTitle.classList.toggle('card__answer');
      cardAnswer.classList.toggle('card__answer');
    });
  });
}
