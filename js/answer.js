export default function answer() {
  const cards = document.querySelectorAll('[data-js=card]');

  cards.forEach(card => {
    const cardAnswerTitle = card.querySelector('[data-js=cardAnswerTitle]');
    const cardAnswer = card.querySelector('[data-js=cardAnswer');
    const answerButton = card.querySelector('[data-js=answerButton]');
    const showButton = card.querySelector('[data-js=showButton]');
    const hideButton = card.querySelector('[data-js=hideButton]');
    const counterButtonRight = card.querySelector(
      '[data-js=counterButtonRight]'
    );
    const counterButtonWrong = card.querySelector(
      '[data-js=counterButtonWrong]'
    );

    answerButton.addEventListener('click', () => {
      cardAnswerTitle.classList.toggle('card__answer');
      cardAnswer.classList.toggle('card__answer');
      showButton.classList.toggle('hidden');
      hideButton.classList.toggle('hidden');
      counterButtonRight.classList.toggle('hidden');
      counterButtonWrong.classList.toggle('hidden');
    });
  });

  /*answerButtons.forEach(answerButton => {
    
  });*/
}
