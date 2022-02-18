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
  pageHome.classList.remove('hidden');
  pageBookmarked.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  headerHome.classList.remove('hidden');
  headerBookmarked.classList.add('hidden');
  headerCreate.classList.add('hidden');
  headerProfile.classList.add('hidden');

  buttonHome.classList.add('footer--active');
  buttonHome.classList.remove('footer--inactive');
  buttonBookmarked.classList.add('footer--inactive');
  buttonBookmarked.classList.remove('footer--active');
  buttonCreate.classList.add('footer--inactive');
  buttonCreate.classList.remove('footer--active');
  buttonProfile.classList.add('footer--inactive');
  buttonProfile.classList.remove('footer--active');
});

buttonBookmarked.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarked.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  headerHome.classList.add('hidden');
  headerBookmarked.classList.remove('hidden');
  headerCreate.classList.add('hidden');
  headerProfile.classList.add('hidden');

  buttonHome.classList.add('footer--inactive');
  buttonHome.classList.remove('footer--active');
  buttonBookmarked.classList.remove('footer--inactive');
  buttonBookmarked.classList.add('footer--active');
  buttonCreate.classList.add('footer--inactive');
  buttonCreate.classList.remove('footer--active');
  buttonProfile.classList.add('footer--inactive');
  buttonProfile.classList.remove('footer--active');
});

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarked.classList.add('hidden');
  pageCreate.classList.remove('hidden');
  pageProfile.classList.add('hidden');

  headerHome.classList.add('hidden');
  headerBookmarked.classList.add('hidden');
  headerCreate.classList.remove('hidden');
  headerProfile.classList.add('hidden');

  buttonHome.classList.add('footer--inactive');
  buttonHome.classList.remove('footer--active');
  buttonBookmarked.classList.add('footer--inactive');
  buttonBookmarked.classList.remove('footer--active');
  buttonCreate.classList.remove('footer--inactive');
  buttonCreate.classList.add('footer--active');
  buttonProfile.classList.add('footer--inactive');
  buttonProfile.classList.remove('footer--active');
});

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden');
  pageBookmarked.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.remove('hidden');

  headerHome.classList.add('hidden');
  headerBookmarked.classList.add('hidden');
  headerCreate.classList.add('hidden');
  headerProfile.classList.remove('hidden');

  buttonHome.classList.add('footer--inactive');
  buttonHome.classList.remove('footer--active');
  buttonBookmarked.classList.add('footer--inactive');
  buttonBookmarked.classList.remove('footer--active');
  buttonCreate.classList.add('footer--inactive');
  buttonCreate.classList.remove('footer--active');
  buttonProfile.classList.remove('footer--inactive');
  buttonProfile.classList.add('footer--active');
});
