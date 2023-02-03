import Component from '../templates/componets';

class Footer extends Component {
  content: string;

  position: InsertPosition;

  constructor(className: string) {
    super(className);
    this.content = `
      <h2>FOOTER</h2>
    `;
    this.position = 'afterbegin';
  }

  render() {
    return super.render();
  }
}

export default Footer;