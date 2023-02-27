import { API } from '../../core/api/api';
import { BoardUI } from './ui';

export class ListCardsRender {

  board = document.querySelector('.board-total-container');

  columnsContainer = document.querySelector('.board-container__columns');

  async getCrads() {
    if (this.board) {
      const boardID = this.board.getAttribute('data-board-id');
      if (boardID) {
        const boardLists = await API.getBoardLists(boardID);
        if (boardLists && boardLists.length > 0) {
          for (let i = 0; i < boardLists.length; i++) {
            const newElem: HTMLElement = document.createElement('div');
            newElem.classList.add('list-container');
            newElem.insertAdjacentHTML('afterbegin', `${BoardUI.addList(boardLists[i].title, boardLists[i].position)}`);
            this.board.appendChild(newElem);
          }
        } else {
          console.log('no lists');
        }
      } 
    } 
  }

  start() {
    this.getCrads();
  }
}