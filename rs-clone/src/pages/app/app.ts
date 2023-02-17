import Footer from '../../core/components/footer';
import Header from '../../core/components/header';
import { FooterProperties, HeaderProperties, PageIDs } from '../../core/data/data';
import Page from '../../core/templates/page';
import { OpenBoard } from '../board/openBoard';
import MainPage from '../main/main';
import { URLData } from './urlData';


class App {
  private static container: HTMLElement | null = document.querySelector('.main');

  private static defaultPageID = 'current-page';

  private header: Header;

  private footer: Footer;

  renderNewPage(value: PageIDs) {
    const currentPAgeHTML = document.querySelector(`#${App.defaultPageID}`);
    if (currentPAgeHTML) {
      currentPAgeHTML.remove();
    }
    let page: Page | null = null;
    if (value === PageIDs.MAIN_PAGE) {
      page = new MainPage();
      this.createDefaultPage(page);
    } else if (value === PageIDs.BOARD_PAGE) {
      const board = new OpenBoard();
      board.start();
    }
  }

  private createDefaultPage(page: Page) {
    const pageHTML = page.render();
    pageHTML.id = App.defaultPageID;
    if (App.container) App.container.append(pageHTML);
  }

  private enableRoutPage() {
    window.addEventListener('hashchange', () => {
      const hash = URLData.getHash();
      for (const item in PageIDs) {
        const key = item as keyof typeof PageIDs;
        if (PageIDs[key] === hash) {
          this.renderNewPage(PageIDs[key]);
        }
      }
    });
  }

  constructor() {
    this.header = new Header(HeaderProperties.className);
    this.footer = new Footer(FooterProperties.className);
  }

  run() {
    this.header.render();
    this.footer.render();
    const hash = URLData.getHash();
    if (hash === PageIDs.MAIN_PAGE || hash === '') {
      this.renderNewPage(PageIDs.MAIN_PAGE);
    } else if (hash === PageIDs.BOARD_PAGE) {
      this.renderNewPage(PageIDs.BOARD_PAGE);
    }
    this.enableRoutPage();
  }
}

export default App;
