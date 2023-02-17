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
          <label for="name">Email</label>
          <input id="name" name="name" type="email" required>
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input id="password" name="password" type="password">
        </div>
        <div class="buttons-container">
        <button type="submit">Sing Up</button>
        <button class="sing-in" type="submit">Sing In</button>
        </div>
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