export default function bookmarks() {
  const cards = document.querySelectorAll('[data-js=card]');

  cards.forEach(card => {
    const bookmarkButton = card.querySelector('[data-js=bookmarkButton]');
    const answerButton = card.querySelector('[data-js=answerButton]');

    bookmarkButton.addEventListener('click', () => {
      bookmarkButton.classList.toggle('button__bookmark--bookmarked');
      card.classList.toggle('card--bookmarked');
      answerButton.classList.toggle('button__answer--bookmarked');
    });
  });
}
