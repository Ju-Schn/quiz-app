export default function counter() {
  const createQuestion = document.querySelector('[data-js=createQuestion]');
  const counterAddQuestion = document.querySelector(
    '[data-js=counterAddQuestion]'
  );
  const createAnswer = document.querySelector('[data-js=createAnswer]');
  const counterAddAnswer = document.querySelector('[data-js=counterAddAnswer]');
  const cards = document.querySelectorAll('[data-js=card]');

  createQuestion.addEventListener('input', () => {
    const questionTextLength = createQuestion.value.length;
    const maxLengthQuestion = createQuestion.maxLength;
    counterAddQuestion.innerText = maxLengthQuestion - questionTextLength;
  });

  createAnswer.addEventListener('input', () => {
    const answerTextLength = createAnswer.value.length;
    const maxLengthAnswer = createQuestion.maxLength;
    counterAddAnswer.innerText = maxLengthAnswer - answerTextLength;
  });

  cards.forEach(card => {
    const counterButtonRight = card.querySelector(
      '[data-js=counterButtonRight]'
    );
    const counterButtonWrong = card.querySelector(
      '[data-js=counterButtonWrong]'
    );
    let rightNumber = 0;
    let wrongNumber = 0;
    counterButtonRight.addEventListener('click', () => {
      let counterRightNumber = card.querySelector(
        '[data-js=counterRightNumber]'
      );
      rightNumber++;
      counterRightNumber.innerText = rightNumber;
    });

    counterButtonWrong.addEventListener('click', () => {
      let counterWrongNumber = card.querySelector(
        '[data-js=counterWrongNumber]'
      );
      wrongNumber++;
      counterWrongNumber.innerText = wrongNumber;
    });
  });
}
