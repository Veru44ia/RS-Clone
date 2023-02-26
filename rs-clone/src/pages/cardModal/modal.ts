import { CardModalDescription } from './cardModalDescription';
import { CardModalTitle } from './cardModalTitle';

export class Modal {
  target: HTMLElement;

  cardModalTitle: CardModalTitle;

  leftSideContainer: HTMLElement | null = document.querySelector('.modal-container__left-side');

  headerTitleContainer: HTMLElement | null = document.querySelector('.modal-container__change-title');

  modal = document.querySelector('.card-modal-container');

  closeButton: HTMLElement | null = document.querySelector('.modal-container__close-button');

  removeButton: HTMLElement | null = document.querySelector('.modal-container__remove-card');
  
  constructor(target: HTMLElement) {
    this.target = target;
    this.cardModalTitle = new CardModalTitle(this.headerTitleContainer, this.target);
  }

  closeModal() {
    if (this.closeButton) this.closeButton.addEventListener('click', () => {
      if (this.headerTitleContainer) {
        const inputContainer: HTMLInputElement | null = this.headerTitleContainer.querySelector('.title');
        if (this.target && inputContainer) this.target.innerText = inputContainer.value;
      }
      this.modal?.remove();
    });
  }

  removeCard() {
    this.removeButton?.addEventListener('click', () => {
      const card = this.target.closest('.card-container');
      if (card) card.remove();
      this.modal?.remove();
    });
  }

  cardModalDescription = new CardModalDescription(this.leftSideContainer);
  
  start() {
    this.closeModal();
    this.removeCard();
    this.cardModalDescription.start();
    this.cardModalTitle.start();
  }

}