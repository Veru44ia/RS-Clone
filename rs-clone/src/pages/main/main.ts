import Page from '../../core/templates/page';
import Modal from '../../core/components/createBoardModal/createBoardModal';
import Aside from '../../core/components/aside/aside';
import LocalStorage from './localStorage';
import './main.css';

interface Board {
  id: number,
  name: string,
  color: string,
}

class MainPage extends Page {
  modal: Modal;

  aside: Aside;

  constructor() {
    super();
    this.modal = new Modal('modal-container');
    this.aside = new Aside();
  }

  renderBoardsList(boards: Board[]) {
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-container');
    mainWrapper.append(this.aside.render());
    const boardsContainer = document.createElement('div');
    boardsContainer.classList.add('boards-container');
    const boardsList = document.createElement('ul');
    boardsList.classList.add('boards-list');
    boards.forEach(({ id, name, color }) => {
      const boardsItem = document.createElement('li');
      boardsItem.classList.add('boards-item');
      boardsItem.innerHTML = ` 
        <button type="button" id="${id}" class="button">${name}</button>
      `;
      if (color.startsWith('url')) {
        (boardsItem.firstElementChild as HTMLElement).style.backgroundImage = `${color}`;
      } else {
        (boardsItem.firstElementChild as HTMLElement).style.background = `${color}`;
      }
      boardsList.append(boardsItem);
    });
    boardsContainer.append(boardsList);
    mainWrapper.append(boardsContainer);
    (this.container as HTMLElement).append(mainWrapper);
    return this.container;
  }

  render() {
    this.renderBoardsList(LocalStorage.getFromLocalStorage());
    this.modal.openModal();
    return this.container;
  }
}

export default MainPage;