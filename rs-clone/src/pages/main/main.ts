import { API } from '../../core/api/api';
import Aside from '../../core/components/aside/aside';
import Modal from '../../core/components/createBoardModal/createBoardModal';
import Page from '../../core/templates/page';
import LocalStorage from './localStorage';
import './main.css';

interface Board {
  _id: number,
  title: string,
  background: string,
}

class MainPage extends Page {
  modal: Modal;

  aside: Aside;

  constructor() {
    super();
    this.modal = new Modal('modal-container');
    this.aside = new Aside();
  }

  async getUserAllBoards() {
    const allBoards = await API.getUserBoards();
    return allBoards;
  }

  async renderBoardsList() {
    let boards: Board[] = LocalStorage.getFromLocalStorage();
    const userBoards = await this.getUserAllBoards();
    if (userBoards) {
      const allBoards = [...userBoards, ...boards];
      boards = allBoards; 
    }
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main-container');
    mainWrapper.append(this.aside.render());
    const boardsContainer = document.createElement('div');
    boardsContainer.classList.add('boards-container');
    const boardsList = document.createElement('ul');
    boardsList.classList.add('boards-list');
    boards.forEach(({ _id, title, background }) => {
      const boardsItem = document.createElement('li');
      boardsItem.classList.add('boards-item');
      boardsItem.innerHTML = ` 
        <button type="button" id="${_id}" class="button">${title}</button>
      `;
      if (background.startsWith('url')) {
        (boardsItem.firstElementChild as HTMLElement).style.backgroundImage = `${background}`;
      } else {
        (boardsItem.firstElementChild as HTMLElement).style.background = `${background}`;
      }
      boardsList.append(boardsItem);
    });
    boardsContainer.append(boardsList);
    mainWrapper.append(boardsContainer);
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