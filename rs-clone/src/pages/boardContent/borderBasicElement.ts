import { UI } from './ui';

export class BorderBasicElement {

  boardContentContainerParent: HTMLElement | null = document.querySelector('.main');

  columnsContainer: HTMLElement | null = null;

  renderBoardContentContainer() {
    this.columnsContainer = document.createElement('div');
    this.columnsContainer.classList.add('board-container__columns');
  }

  renderAddListContainer() {
    if (this.columnsContainer && this.boardContentContainerParent) {
      this.boardContentContainerParent.append(this.columnsContainer);
      this.columnsContainer.insertAdjacentHTML('afterbegin', `${UI.ADD_LIST}`);
    }
  }

  start() {
    this.renderBoardContentContainer();
    this.renderAddListContainer();
  }

}
