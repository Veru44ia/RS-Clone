import { PageIDs } from '../../core/data/data';

export class AuthorizationHandler {
  backendUrl = 'https://fullstackproject-production.up.railway.app';

  responseMessage = document.getElementById('response_message');

  signUpButton = document.getElementById('sign-up');

  signInButton = document.getElementById('sign-in');

  emailInput = document.getElementById('email-input') as HTMLInputElement;

  passwordInput = document.getElementById('password-input') as HTMLInputElement;

  currentUserField = document.querySelector('#current_user');

  header: HTMLElement | null = document.querySelector('.header');

  footer: HTMLElement | null = document.querySelector('.footer');

  currentUser: HTMLElement | null = null;

  signUp() {
    if (this.signUpButton) this.signUpButton.addEventListener('click', () => {
      let login = ''; 
      if (this.emailInput) {
        login = this.emailInput.value;
      }
      let password = ''; 
      if (this.emailInput) {
        password = this.emailInput.value;
      }
    
      fetch(`${this.backendUrl}/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'http://127.0.0.1:5555',
        },
        body: JSON.stringify({
          login: `${login}`,
          password: `${password}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (this.responseMessage) this.responseMessage.innerHTML = data.message;
          if (data.user) {
            if (this.currentUserField) this.currentUserField.innerHTML = data.user.login;
            this.currentUser = data.user;
            
            localStorage.setItem('userID', data.user._id);
            localStorage.setItem('userLogin', data.user.login);
            this.GoToMainPage();
          }
        })
        .catch((error) => {
          if (this.responseMessage) this.responseMessage.innerHTML = error.message;
        });
    });
  }

  singIn() {
    if (this.signInButton) this.signInButton.addEventListener('click', () => {
      let login = ''; 
      if (this.emailInput) {
        login = this.emailInput.value;
      }
      let password = ''; 
      if (this.passwordInput) {
        password = this.passwordInput.value;
      }
    
      fetch(`${this.backendUrl}/users/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: 'http://127.0.0.1:5555',
        },
        body: JSON.stringify({
          login: `${login}`,
          password: `${password}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            if (this.currentUserField) this.currentUserField.innerHTML = data.user.login;
            this.currentUser = data.user;

            localStorage.setItem('userID', data.user._id);
            localStorage.setItem('userLogin', data.user.login);
            this.GoToMainPage();
          }
          if (this.responseMessage) this.responseMessage.innerHTML = data.message;
        })
        .catch((error) => {
          if (this.responseMessage) this.responseMessage.innerHTML = error.message;
        });
    });
  }

  GoToMainPage() {
    window.location.hash = `#${PageIDs.MAIN_PAGE}`;

    if (this.header) this.header.removeAttribute('style');
    if (this.footer) this.footer.removeAttribute('style');

    const user: HTMLElement | null = document.querySelector('.user');
    const userName = localStorage.getItem('userLogin') as string;
    if (user) user.innerText = userName[0].toUpperCase();
    location.reload(); 
  }

  start() {
    this.singIn();
    this.signUp();
  }

}