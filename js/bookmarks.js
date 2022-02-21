export default function bookmarks() {
  const cards = document.querySelectorAll('[data-js=card]');

  cards.forEach(card => {
    const bookmarkButton = card.querySelector('[data-js=bookmarkButton]');
    const answerButton = card.querySelector('[data-js=answerButton]');
    const bookmarkImageActive = card.querySelector(
      '[data-js=bookmarkImageActive]'
    );
    const bookmarkImageInactive = card.querySelector(
      '[data-js=bookmarkImageInactive]'
    );
    const counterButtonRight = card.querySelector(
      '[data-js=counterButtonRight]'
    );
    const counterButtonWrong = card.querySelector(
      '[data-js=counterButtonWrong]'
    );

    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('button__bookmark--bookmarked');
      card.classList.toggle('card--bookmarked');
      answerButton.classList.toggle('button__answer--bookmarked');
      counterButtonRight.classList.toggle('counter__button--bookmarked');
      counterButtonWrong.classList.toggle('counter__button--bookmarked');
      bookmarkImageActive.classList.toggle('hidden');
      bookmarkImageInactive.classList.toggle('hidden');
    });
  });
}
