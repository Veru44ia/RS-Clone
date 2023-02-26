import { OpenBoard } from '../../../pages/board/openBoard';
import { API } from '../../api/api';
import BackgroundModal from '../createBgModal/createBgModal';
import './createBoardModal.css';

class Modal {
  container: HTMLElement;

  backgroundModal: BackgroundModal;

  constructor(className: string) {
    this.container = document.createElement('div');
    this.container.className = className;
    this.backgroundModal = new BackgroundModal('bg-modal');
  }

  openModal() {
    window.onload = () => {
      const headerButton = document.body.querySelector('.create-bord-button') as HTMLElement;
      headerButton.addEventListener('click', async () => {
        const mainContainer = document.body.querySelectorAll('.boards-item');
        const buttonCreate = mainContainer[mainContainer.length - 1];
        buttonCreate.append(await this.render());
      });
      const boardsContainer = document.body.querySelector('.boards-list') as HTMLElement;
      boardsContainer.addEventListener('click', async (event: MouseEvent) => {
        if ((event.target as HTMLElement).textContent === 'Создать доску') {
          const mainContainer = document.body.querySelectorAll('.boards-item');
          const buttonCreate = mainContainer[mainContainer.length - 1];
          buttonCreate.append(await this.render());
        }
      });
    };
  }

  closeModal() {
    const closeIcon = this.container.querySelector('.close-modal');
    this.container.addEventListener('click', (event: MouseEvent) => {
      if (
        (event.target as HTMLElement) === this.container ||
        (event.target as HTMLElement) === closeIcon
      ) {
        this.container.remove();
      }
    });
  }

  buttonsListeners() {
    document.addEventListener('click', (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.modal-list-top .list-item .btn')) {
        const item = event.target as HTMLButtonElement;
        const current = Array.from(document.querySelectorAll('.tick'));
        current.map((cur) => cur.className = cur.className.replace(' tick', ''));
        item.classList.add('tick');
        this.changePreviewImage(item.style.backgroundImage);
      } else if ((event.target as HTMLElement).closest('.modal-list-bottom .list-item .btn')) {
        const item = event.target as HTMLButtonElement;
        this.changePreviewColor(item.style.backgroundColor);
        const current = Array.from(document.querySelectorAll('.tick'));
        current.map((cur) => cur.className = cur.className.replace(' tick', ''));
        item.classList.add('tick');
      } else if ((event.target as HTMLElement).closest('.text-input')) {
        this.changeInput();
      } else if ((event.target as HTMLElement).closest('.last-button')) {
        this.backgroundModal.openModal();
      }
    });
  }

  changeInput() {
    const input = document.querySelector('.text-input') as HTMLInputElement;
    const button = document.querySelector('.submit-button') as HTMLButtonElement;
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  }

  async getLinkToImage() {
    const url = 'https://api.unsplash.com/photos/random?query=nature&client_id=bgAy5fr13aewuw8euLW7ruqB3CB524TPyYwbGEoOql4';
    const res = await fetch(url);
    const data = await res.json();
    return data.urls.regular;
  }

  changePreviewImage(image: string) {
    const preview = document.querySelector('.modal-board-preview') as HTMLElement;
    preview.style.backgroundImage = image;
  }

  changePreviewColor(color: string) {
    const preview = document.querySelector('.modal-board-preview') as HTMLElement;
    preview.style.backgroundImage = 'none';
    preview.style.backgroundColor = color;
  }

  submitForm() {
    const form = this.container.querySelector('.form') as HTMLFormElement;
    form.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const modal = document.body.querySelector('.modal-container') as HTMLElement;
      const name = document.querySelector('.name') as HTMLInputElement;
      const color = document.querySelector('.tick') as HTMLInputElement;
      const board = {
        id: Date.now(),
        name: `${name.value}`,
        color: `${color.style.backgroundImage || color.style.backgroundColor}`,
      };
      if (localStorage.getItem('board')) {
        const arr = JSON.parse(localStorage.getItem('board') as string);
        const items = arr.slice(0, -1);
        const lastItem = arr.slice(-1);
        const newArr = [...items, board, ...lastItem];
        localStorage.setItem('board', JSON.stringify(newArr));

        const newBoard = await API.createBoard(board.name, board.color);
        if (newBoard) {
          console.log(newBoard);
          const openBoard = new OpenBoard(newBoard._id, newBoard.title, newBoard.background);
          openBoard.start();
        } 

        ////////////////////////////get all boards

        const allBoards = await API.getUserBoards();
        console.log(allBoards);

        ////////////////////////////

      } else {
        localStorage.setItem('board', JSON.stringify(board));
      }
      modal.remove();
    });
  }

  async render() {
    this.container.innerHTML = `
      <div class="modal-wrapper">
        <p class="modal-title">Создать доску</p>
        <button type="button" class="close-modal">x</button>
        <div class="modal-wrap">
          <div class="modal-board-preview">
            <div class="modal-inner"></div>
          </div>
        </div>
        <div class="modal-preview">
          <p class="preview-title">Фон</p>
          <div class="modal-backgrounds">
            <ul class="modal-list-top">
              <li class="list-item">
                <button type="button" class="btn tick" style="background-image: url(https://images.unsplash.com/photo-1675025844397-9819eb7091ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" style="background-image: url(${await this.getLinkToImage()});"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" style="background-image: url(${await this.getLinkToImage()});"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" style="background-image: url(${await this.getLinkToImage()});"></button>
              </li>
            </ul>
            <ul class="modal-list-bottom">
              <li class="list-item">
                <button type="button" class="btn" title="Синий" style="background-color: #0079bf"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" title="Оранжевый" style="background-color: #ed992b"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" title="Зеленый" style="background-color: #3c991d"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" title="Красный" style="background-color: #de4528"></button>
              </li>
              <li class="list-item">
                <button type="button" class="btn" title="Фиолетовый" style="background-color: #7d4699"></button>
              </li>
              <li class="list-item">
                <button type="button" class="last-button"><span class="dots">...</span></button>
              </li>
            </ul>
          </div>
        </div>
        <form class="form">
          <label class="input-label">
            <span class="input-title">Заголовок доски <span class="star">*</span></span>
            <input type="text" class="text-input name" name="name" placeholder="Укажите название доски" />
          </label> 
          <button class="submit-button" type="submit" disabled>Создать</button>
          <p class="modal-text">Используя изображения с сайта Unsplash, вы принимаете <a href="https://unsplash.com/terms" target="_blank">Условия его использования</a> и <a href="https://unsplash.com/license" target="_blank">правила лицензии</a></p>
        </form> 
      </div>  
    `;
    this.closeModal();
    this.buttonsListeners();
    this.submitForm();
    return this.container;
  }
}

export default Modal;