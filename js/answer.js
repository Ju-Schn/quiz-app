export default function answer() {
  const cards = document.querySelectorAll('[data-js=card]');

  cards.forEach(card => {
    const cardAnswerTitle = card.querySelector('[data-js=cardAnswerTitle]');
    const cardAnswer = card.querySelector('[data-js=cardAnswer');
    const answerButton = card.querySelector('[data-js=answerButton]');

    answerButton.addEventListener('click', () => {
      cardAnswerTitle.classList.toggle('card__answer');
      cardAnswer.classList.toggle('card__answer');
    });
  });

  /*answerButtons.forEach(answerButton => {
    
  });*/
}
