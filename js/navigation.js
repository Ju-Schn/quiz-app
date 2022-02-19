export default function navigation() {
  const buttonHome = document.querySelector('[data-js=buttonHome]');
  const buttonBookmarked = document.querySelector('[data-js=buttonBookmarked]');
  const buttonCreate = document.querySelector('[data-js=buttonCreate]');
  const buttonProfile = document.querySelector('[data-js=buttonProfile]');

  const pageHome = document.querySelector('[data-js=pageHome]');
  const pageBookmarked = document.querySelector('[data-js=pageBookmarked]');
  const pageCreate = document.querySelector('[data-js=pageCreate]');
  const pageProfile = document.querySelector('[data-js=pageProfile]');

  const headerHome = document.querySelector('[data-js=headerHome]');
  const headerBookmarked = document.querySelector('[data-js=headerBookmarked]');
  const headerCreate = document.querySelector('[data-js=headerCreate]');
  const headerProfile = document.querySelector('[data-js=headerProfile]');

  buttonHome.addEventListener('click', () => {
    const footerImageHome = buttonHome.querySelector('[data-js=footerImage]');
    const footerImageBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageCreate = buttonCreate.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageProfile = buttonProfile.querySelector(
      '[data-js=footerImage]'
    );

    const footerImageInactiveHome = buttonHome.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveCreate = buttonCreate.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveProfile = buttonProfile.querySelector(
      '[data-js=footerImageInactive]'
    );

    footerImageInactiveHome.classList.add('hidden');
    footerImageInactiveBookmarked.classList.remove('hidden');
    footerImageInactiveCreate.classList.remove('hidden');
    footerImageInactiveProfile.classList.remove('hidden');
    footerImageHome.classList.remove('hidden');
    footerImageBookmarked.classList.add('hidden');
    footerImageCreate.classList.add('hidden');
    footerImageProfile.classList.add('hidden');

    pageHome.classList.remove('hidden');
    pageBookmarked.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    headerHome.classList.remove('hidden');
    headerBookmarked.classList.add('hidden');
    headerCreate.classList.add('hidden');
    headerProfile.classList.add('hidden');

    buttonHome.classList.add('footer--active');
    buttonBookmarked.classList.remove('footer--active');
    buttonCreate.classList.remove('footer--active');
    buttonProfile.classList.remove('footer--active');
  });

  buttonBookmarked.addEventListener('click', () => {
    const footerImageHome = buttonHome.querySelector('[data-js=footerImage]');
    const footerImageBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageCreate = buttonCreate.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageProfile = buttonProfile.querySelector(
      '[data-js=footerImage]'
    );

    const footerImageInactiveHome = buttonHome.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveCreate = buttonCreate.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveProfile = buttonProfile.querySelector(
      '[data-js=footerImageInactive]'
    );

    footerImageInactiveHome.classList.remove('hidden');
    footerImageInactiveBookmarked.classList.add('hidden');
    footerImageInactiveCreate.classList.remove('hidden');
    footerImageInactiveProfile.classList.remove('hidden');
    footerImageHome.classList.add('hidden');
    footerImageBookmarked.classList.remove('hidden');
    footerImageCreate.classList.add('hidden');
    footerImageProfile.classList.add('hidden');

    pageHome.classList.add('hidden');
    pageBookmarked.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    headerHome.classList.add('hidden');
    headerBookmarked.classList.remove('hidden');
    headerCreate.classList.add('hidden');
    headerProfile.classList.add('hidden');

    buttonHome.classList.remove('footer--active');
    buttonBookmarked.classList.add('footer--active');
    buttonCreate.classList.remove('footer--active');
    buttonProfile.classList.remove('footer--active');
  });

  buttonCreate.addEventListener('click', () => {
    const footerImageHome = buttonHome.querySelector('[data-js=footerImage]');
    const footerImageBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageCreate = buttonCreate.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageProfile = buttonProfile.querySelector(
      '[data-js=footerImage]'
    );

    const footerImageInactiveHome = buttonHome.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveCreate = buttonCreate.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveProfile = buttonProfile.querySelector(
      '[data-js=footerImageInactive]'
    );

    footerImageInactiveHome.classList.remove('hidden');
    footerImageInactiveBookmarked.classList.remove('hidden');
    footerImageInactiveCreate.classList.add('hidden');
    footerImageInactiveProfile.classList.remove('hidden');
    footerImageHome.classList.add('hidden');
    footerImageBookmarked.classList.add('hidden');
    footerImageCreate.classList.remove('hidden');
    footerImageProfile.classList.add('hidden');

    pageHome.classList.add('hidden');
    pageBookmarked.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');

    headerHome.classList.add('hidden');
    headerBookmarked.classList.add('hidden');
    headerCreate.classList.remove('hidden');
    headerProfile.classList.add('hidden');

    buttonHome.classList.remove('footer--active');
    buttonBookmarked.classList.remove('footer--active');
    buttonCreate.classList.add('footer--active');
    buttonProfile.classList.remove('footer--active');
  });

  buttonProfile.addEventListener('click', () => {
    const footerImageHome = buttonHome.querySelector('[data-js=footerImage]');
    const footerImageBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageCreate = buttonCreate.querySelector(
      '[data-js=footerImage]'
    );
    const footerImageProfile = buttonProfile.querySelector(
      '[data-js=footerImage]'
    );

    const footerImageInactiveHome = buttonHome.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveBookmarked = buttonBookmarked.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveCreate = buttonCreate.querySelector(
      '[data-js=footerImageInactive]'
    );
    const footerImageInactiveProfile = buttonProfile.querySelector(
      '[data-js=footerImageInactive]'
    );

    footerImageInactiveHome.classList.remove('hidden');
    footerImageInactiveBookmarked.classList.remove('hidden');
    footerImageInactiveCreate.classList.remove('hidden');
    footerImageInactiveProfile.classList.add('hidden');
    footerImageHome.classList.add('hidden');
    footerImageBookmarked.classList.add('hidden');
    footerImageCreate.classList.add('hidden');
    footerImageProfile.classList.remove('hidden');

    pageHome.classList.add('hidden');
    pageBookmarked.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');

    headerHome.classList.add('hidden');
    headerBookmarked.classList.add('hidden');
    headerCreate.classList.add('hidden');
    headerProfile.classList.remove('hidden');

    buttonHome.classList.remove('footer--active');
    buttonBookmarked.classList.remove('footer--active');
    buttonCreate.classList.remove('footer--active');
    buttonProfile.classList.add('footer--active');
  });
}
