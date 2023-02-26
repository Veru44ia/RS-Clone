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

  cardTargetClass = 'card-target';

  setingsTargerClass = 'list-container__settings';

  target: HTMLElement | null = null;

  cardEventListener() {
    if (this.eventListenerStatus === false) {
      this.eventListenerStatus = true;
      this.targetContainer?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains(`${this.cardTargetClass}`)) {
          this.renderModal();
          const modal = new Modal(target);
          modal.start();
        }
      });
    }
  }

  // cardSettings() {
  //   function getCoords(elem: HTMLElement) {
  //     const box = elem.getBoundingClientRect();
    
  //     return {
  //       top: box.top + window.pageYOffset,
  //       right: box.right + window.pageXOffset,
  //       bottom: box.bottom + window.pageYOffset,
  //       left: box.left + window.pageXOffset,
  //     };
  //   }
  // }

  renderModal() {
    document.body.insertAdjacentHTML('afterbegin', `${BoardUI.cardModal()}`);
  }

}

