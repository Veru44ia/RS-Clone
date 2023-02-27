import { ModalUI } from './ui';

export class CardModalTitle {
  targetCard: HTMLElement | null;

  container: HTMLElement | null;

  constructor(container: HTMLElement | null, targetCard: HTMLElement | null) {
    this.targetCard = targetCard;
    this.container = container;
  }

  renderTitle() {
    if (this.targetCard) {
      const titleText = this.targetCard.innerText;
      if (this.container) this.container.insertAdjacentHTML('beforeend', `${ModalUI.addTitle(titleText)}`);
    }
  }

  start() {
    this.renderTitle();
  }
}