import { API } from '../../core/api/api';
import { BoardUI } from './ui';

export class BoardSaveElemsRender {

  boardContainer = document.querySelector('.board-total-container');

  columnsContainer = document.querySelector('.board-container__columns');

  async setLists() {
    if (this.boardContainer) {
      const boardID = this.boardContainer.getAttribute('data-board-id');
      if (boardID) {
        const boardLists = await API.getBoardLists(boardID);
        if (boardLists && boardLists.length > 0) {
          for (let i = 0; i < boardLists.length; i++) {
            const newElem: HTMLElement = document.createElement('div');
            newElem.classList.add('list-container');
            newElem.insertAdjacentHTML('afterbegin', `${BoardUI.addList(boardLists[i].title, boardLists[i].position)}`);
            this.boardContainer.appendChild(newElem);
          }
        } else {
          console.log('no lists');
        }
      } 
    } 
  }

  setCards() {
    const listsCollection: NodeListOf<Element> = document.querySelectorAll('.list-container__wrapper');
    listsCollection.forEach(async (item) => {
      const listID = item.getAttribute('data-id');
      if (listID) {
        const cards = await API.getListCards(listID);
        if (cards && cards.length > 0) {
          for (let i = 0; i < cards.length; i++) {
            const cardsContainer = item.querySelector('.list-container__cards-container');
            const plusElemContainer = item.querySelector('.list-container__add-card-wrapper');
            const newElem: HTMLElement = document.createElement('div');
            newElem.classList.add('card-container');
            newElem.insertAdjacentHTML('afterbegin', `${BoardUI.addCard(cards[i].title)}`);
            cardsContainer?.insertBefore(newElem, plusElemContainer);
          }
        } else {
          console.log(`list ${listID} have no cards`);
        }
      }
    });
  }

  start() {
    this.setLists();
    this.setCards();
  }
}