export class AuthorizationHandler {
  responseMessage = document.getElementById('response_message');

  signUpButton = document.getElementById('sing-up');

  signInButton = document.getElementById('sing-in');

  emailInput = document.getElementById('email-input') as HTMLInputElement;

  passwordInput = document.getElementById('password-input') as HTMLInputElement;

  currentUserField = document.querySelector('#current_user');

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
    
      fetch('http://127.0.0.1:3000/users/create', {
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
      if (this.emailInput) {
        password = this.emailInput.value;
      }
    
      fetch('http://127.0.0.1:3000/users/signin', {
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
          }
          if (this.responseMessage) this.responseMessage.innerHTML = data.message;
        })
        .catch((error) => {
          if (this.responseMessage) this.responseMessage.innerHTML = error.message;
        });
    });
  }

}