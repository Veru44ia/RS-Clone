import { ModalUI } from './ui';

export class CardModalDescription {

  container: HTMLElement | null;

  constructor(container: HTMLElement | null) {
    this.container = container;
  }

  renderDescription() {
    if (this.container) this.container.insertAdjacentHTML('beforeend', `${ModalUI.addDescription()}`);
  }

  start() {
    this.renderDescription();
  }
}