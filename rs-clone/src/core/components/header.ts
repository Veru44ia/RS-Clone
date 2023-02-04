import Component from '../templates/componets';

class Header extends Component {
  content: string;

  position: InsertPosition;

  constructor(className: string) {
    super(className);
    this.content = `
      <h2>HEADER</h2>
    `;
    this.position = 'afterbegin';
  }

  render() {
    return super.render();
  }
}

export default Header;