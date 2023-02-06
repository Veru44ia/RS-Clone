import Component from '../templates/componets';

class Footer extends Component {
  content: string;

  position: InsertPosition;

  constructor(className: string) {
    super(className);
    this.content = `
    <div class="footer-content">
    <div class="rs-logo">
      <a href="https://rs.school/js/" target="_blank"><img src="../../assets/rs_school.svg" alt="rss"></a>
    </div>
    <div class="github">
      <p>GitHub</p>
      <ul class="github-accounts">
        <li class="github-accounts-li first"><a href="https://github.com/Rannue/" target="_blank">Rannue</a></li>
        <li class="github-accounts-li"><a href="https://github.com/Veru44ia/" target="_blank">Veru44ia</a></li>
        <li class="github-accounts-li"><a href="https://github.com/Kotkiller/" target="_blank">Kotkiller</a></li>
      </ul>        
    </div>
  </div>
    `;
    this.position = 'afterbegin';
  }

  render() {
    return super.render();
  }
}

export default Footer;