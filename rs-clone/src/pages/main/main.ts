import Page from '../../core/templates/page';
import Modal from '../../core/components/createBoardModal/createBoardModal';
import Aside from '../../core/components/aside/aside';
import './main.css';

class MainPage extends Page {
  modal: Modal;

  aside: Aside;

  constructor() {
    super();
    this.modal = new Modal('modal-container');
    this.aside = new Aside();
  }

  renderBoardsList() {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-container');
    const boardsBlock = document.createElement('div');
    boardsBlock.classList.add('boards-container');
    boardsBlock.innerHTML = `
      <button type="button" class="button button-create-board">Создать доску</button>    
    `;
    mainWrapper.append(this.aside.render(), boardsBlock);
    (this.container as HTMLElement).append(mainWrapper);
    return this.container;
  }

  render() {
    this.renderBoardsList();
    this.modal.openModal();
    return this.container;
  }
}

export default MainPage;