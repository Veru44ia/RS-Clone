import { Modal } from '../cardModal/modal';
import { BoardUI } from './ui';

export class CardHandler {
  private static instance: CardHandler;

  eventListenerStatus = false;

  public static getInstance(): CardHandler {
    if (!CardHandler.instance) {
      CardHandler.instance = new CardHandler();
    }
    return CardHandler.instance;
  }

  targetContainer: HTMLElement | null = document.querySelector('.board-container__columns');

  targetClass = 'card-target';

  target: HTMLElement | null = null;

  cardEventListener() {
    if (this.eventListenerStatus === false) {
      this.eventListenerStatus = true;
      this.targetContainer?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains(`${this.targetClass}`)) {
          this.renderModal();
          const modal = new Modal(target);
          modal.start();
        }
      });
    }

  }

  renderModal() {
    document.body.insertAdjacentHTML('afterbegin', `${BoardUI.cardModal()}`);
  }

}

