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

  buttonsListeners() {
    const boardsList = document.body.querySelector('.boards-list') as HTMLElement;
    boardsList.addEventListener('click', (event: MouseEvent) => { 
      if ((event.target as HTMLElement).closest('.boards-item .button')) {
        const id = (event.target as HTMLButtonElement).id;
        const title = (event.target as HTMLButtonElement).textContent;
        let background = (event.target as HTMLButtonElement).getAttribute('style') as string;
        if (background.includes('image')) {
          background = background.slice(18);
        } else {
          background = background.slice(12);
        }
        console.log(id);
        console.log(title);
        console.log(background);
      } 
    });
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
    this.modal.openModal();
    this.buttonsListeners();
    return this.container;
  }

  render() {
    this.renderBoardsList();
    return this.container;
  }
}

export default MainPage;