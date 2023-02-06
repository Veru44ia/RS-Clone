import Page from '../../core/templates/page';
import Modal from '../../core/components/createBoardModal/createBoardModal';
import './main.css';

class MainPage extends Page {
  modal: Modal;

  constructor() {
    super();
    this.modal = new Modal('modal-container');
  }

  renderBoardsList() {
    this.container.innerHTML = '';
    const boardsBlock = document.createElement('div');
    boardsBlock.classList.add('boards-container');
    boardsBlock.innerHTML = `
      <button type="button" class="button button-create-board">Создать доску</button>    
    `;
    (this.container as HTMLElement).append(boardsBlock);
    return this.container;
    
  }

  render() {
    this.renderBoardsList();
    this.modal.openModal();
    return this.container;
  }
}

export default MainPage;