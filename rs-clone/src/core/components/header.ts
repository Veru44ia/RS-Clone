import Component from '../templates/componets';

class Header extends Component {
  content: string;

  position: InsertPosition;

  constructor(className: string) {
    super(className);
    this.content = `
    <div class="header-content">
    <div class="header-content__left-side">
      <div class="logo">
        <h2><a href="#">Clone</a></h2>
      </div>
      <nav class="nav">
        <button class="nav-button">
          <select class="select-button">
            <option value="workspace" checked>Рабочее пространство</option>
          </select>
        </button>
        <button class="nav-button">
          <select class="select-button">
            <option value="recent" checked>Недавние</option>
          </select>
        </button>
        <button class="nav-button">
          <select class="select-button">
            <option value="favorite" checked>В избранном</option>
          </select>
        </button>
      </nav>
    </div>
    <div class="header-content__center-side">
      
    </div>
    <div class="header-content__right-side">
    <button class="create-bord-button">Создать доску</button>
    <div class="user-content">
    <div class="user"></div>
    <button class="user-sign-out">Выйти</button>
    </div>
    </div>
  </div>`;
    this.position = 'afterbegin';
  }

  render() {
    return super.render();
  }
}

export default Header;
