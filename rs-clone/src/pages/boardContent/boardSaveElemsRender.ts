import { API } from '../../core/api/api';
import { BoardUI } from './ui';

export class BoardSaveElemsRender {

  boardContainer = document.querySelector('.board-total-container');

  columnsContainer = document.querySelector('.board-container__columns');

  async setLists() {
    if (this.columnsContainer && this.boardContainer) {
      const boardID = this.boardContainer.getAttribute('data-board-id');
      if (boardID) {
        const boardLists = await API.getBoardLists(boardID);
        if (boardLists && boardLists.length > 0) {
          for (let i = boardLists.length - 1; i >= 0; i--) {
            const newElem: HTMLElement = document.createElement('div');
            newElem.classList.add('list-container');
            newElem.insertAdjacentHTML('afterbegin', `${BoardUI.addList(boardLists[i].title, boardLists[i]._id,  boardLists[i].position)}`);
            this.columnsContainer.prepend(newElem);
          }
        }
      } 
    } 

    this.setCards();
  }

  setCards() {
    const listsCollection: NodeListOf<Element> = document.querySelectorAll('.list-container__wrapper');
    listsCollection.forEach(async (item) => {
      const listID = item.getAttribute('data-id');
      if (listID) {
        const cards = await API.getListCards(listID);
        if (cards && cards.length > 0) {
          for (let i = cards.length - 1; i >= 0; i--) {
            const cardsContainer = item.querySelector('.list-container__cards-container');
            const newElem: HTMLElement = document.createElement('div');
            newElem.classList.add('card-container');
            newElem.insertAdjacentHTML('afterbegin', `${BoardUI.addCard(cards[i].title)}`);
            cardsContainer?.prepend(newElem);
          }
        }
      }
    });
  }

  start() {
    this.setLists();
  }
}