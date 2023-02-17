import Page from '../../core/templates/page';
import './authorization.css';

export class AuthorizationPage extends Page {
  content: string;

  constructor() {
    super();
    this.position = 'afterbegin';
    this.content = `
    <div class="authorization-container">
    <div class="authorization-container__wrapper">
      <h1>Welcome to CLone!</h1>
      <div id="error"></div>
      <form id="form" action="/" method="GET">
        <div class="input-container">
          <label for="email">Email</label>
          <input id="email-input" name="email" type="email" required>
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input id="password-input" name="password" type="password">
        </div>
        <div id="response_message"></div>
        <div class="buttons-container">
        <button id="sing-up" type="submit">Sing Up</button>
        <button id="sing-in" class="sing-in" type="submit">Sing In</button>
        </div>
        <h3>
        <span>Currently logged as: </span>
        <span id="current_user"></span>
        </h3>
      </form>
      </div>
    </div>
    `;
  }

  render() {
    this.container.insertAdjacentHTML(this.position, this.content);
    return this.container;
  }

}