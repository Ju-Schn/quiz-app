export default function counter() {
  const createQuestion = document.querySelector('[data-js=createQuestion]');
  const counterAddQuestion = document.querySelector(
    '[data-js=counterAddQuestion]'
  );
  const createAnswer = document.querySelector('[data-js=createAnswer]');
  const counterAddAnswer = document.querySelector('[data-js=counterAddAnswer]');

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
}
