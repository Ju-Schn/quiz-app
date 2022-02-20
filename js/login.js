export default function login() {
  const loginButton = document.querySelector('[loginButton]');
  let isUserLoggedOut = true;

  loginButton.addEventListener('click', () => {
    if (isUserLoggedOut) {
      alert('Welcome to your personal Qudy - Quiz & Study');
      loginButton.textContent = 'Logout';
      isUserLoggedOut = false;
    } else {
      alert('Byebye! See you soon at Qudy!');
      loginButton.textContent = 'Login';
      isUserLoggedOut = true;
    }
  });
}
