import { PageIDs } from '../../core/data/data';
import Page from '../../core/templates/page';
import './authorization.css';

export class AuthorizationPage extends Page {
  content: string;

  header: HTMLElement | null = document.querySelector('.header');

  footer: HTMLElement | null = document.querySelector('.footer');

  constructor() {
    super();
    this.position = 'afterbegin';
    this.content = `
    <div class="authorization-container">
    <div class="authorization-container__wrapper">
      <h1>Добро пожаловать в CLone!</h1>
      <div id="error"></div>
      <div class="authorization-container__content">
        <div class="input-container">
          <label for="email">Email</label>
          <input id="email-input" name="email" type="email" required>
        </div>
        <div class="input-container">
          <label for="password">Пароль</label>
          <input id="password-input" name="password" type="password">
        </div>
        <div id="response_message"></div>
        <div class="buttons-container">
        <button id="sign-up" type="submit">Зарегестрироваться</button>
        <button id="sign-in" class="sing-in" type="submit">Войти</button>
        </div>
      </div>
      </div>
    </div>
    `;
  }

  render() {
    if (this.header) this.header.style.display = 'none';
    if (this.footer) this.footer.style.display = 'none';

    const hash = `#${PageIDs.AUTORIZATION_PAGE}`;
    const state = hash;
    history.pushState(null, '', state);

    this.container.insertAdjacentHTML(this.position, this.content);
    return this.container;
  }

}