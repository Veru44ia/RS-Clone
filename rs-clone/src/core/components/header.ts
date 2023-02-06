import Component from '../templates/componets';

class Header extends Component {
  content: string;

  position: InsertPosition;

  constructor(className: string) {
    super(className);
    this.content = `
        <div class="header-content">
      <div class="logo">
        <h2><a href="#">Trello-clone</a></h2>
      </div>
      <nav class="nav" >
        <button class="nav-button">
          <span class="workspace">Рабочее пространство</span>
          <span class="arrow-down"><img src="../../assets/down-arrow.svg" alt="arrow-down"></span>
        </button>
        <button class="nav-button">
          <span class="recent">Недавние</span>
          <span class="arrow-down"><img src="../../assets/down-arrow.svg" alt="arrow-down"></span>
        </button>
        <button class="nav-button">
          <span class="favorite">В избранном</span>
          <span class="arrow-down"><img src="../../assets/down-arrow.svg" alt="arrow-down"></span>
        </button>      
      </nav>
      <button class="create-bord-button">Создать доску</button>
      <div class="user">
        <span>Y</span>
       </div>
    </div>
    `;
    this.position = 'afterbegin';
  }

  render() {
    return super.render();
  }
}

export default Header;