import Page from '../../core/templates/page';

export class AuthorizationPage extends Page {
  constructor() {
    super();
    this.content = `
    <div class="authorization-container">
      <div id="error"></div>
      <form id="form" action="/" method="GET">
        <div>
          <label for="name">Email</label>
          <input id="name" name="name" type="text" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" name="password" type="password">
        </div>
        <button type="submit">Submit</button>
        <button type="submit">Sing Up</button>
        <button type="submit">Sing In</button>
      </form>
    </div>
    `;
  }

}