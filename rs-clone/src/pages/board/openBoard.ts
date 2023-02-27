import { BoardHandler } from '../boardContent/boardHandler';

export class OpenBoard {
  title: string;

  color: string;

  boardID: string;

  constructor(boardID = '1', title = 'No name', color = '#264653') {
    this.title = title;
    this.color = color;
    this.boardID = boardID;
  }

  renderBoard() {
    const mainContainer = document.querySelector('.main');
    if (mainContainer) {
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('afterbegin', `
      <div id="current-page">
      <div class="board-total-container" data-board-id="${this.boardID}">
        <div class="board-total-container__header">
          <div class="title">
            <h2>${this.title}</h2>
          </div>
          <div class="board-options">
            <svg class='menu option' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z" fill="#F5F5F5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
      `);

      const boardTotalContainer = document.querySelector('.board-total-container') as HTMLElement;
      if (this.color.startsWith('url')) {
        boardTotalContainer.style.backgroundImage = `${this.color.slice(0, -1)}`;
      } else {
        boardTotalContainer.style.background = `${this.color.slice(0, -1)}`;
      }
    }
  }

  start() {
    addEventListener('popstate', function () {
      location.reload();
    }, false);
    this.renderBoard();
    const boardHandler = new BoardHandler();
    boardHandler.start();
  }
}