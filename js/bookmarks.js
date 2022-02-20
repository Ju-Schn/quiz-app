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

    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('button__bookmark--bookmarked');
      card.classList.toggle('card--bookmarked');
      answerButton.classList.toggle('button__answer--bookmarked');
      bookmarkImageActive.classList.toggle('hidden');
      bookmarkImageInactive.classList.toggle('hidden');
    });
  });
}
