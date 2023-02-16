import { CardModalDescription } from './cardModalDescription';

export class Modal {
  target: HTMLElement;

  constructor(target: HTMLElement) {
    this.target = target;
  }

  modal = document.querySelector('.card-modal-container');

  closeButton: HTMLElement | null = document.querySelector('.modal-container__close-button');

  removeButton: HTMLElement | null = document.querySelector('.modal-container__remove-card');

  leftSideContainer: HTMLElement | null = document.querySelector('.modal-container__left-side');

  closeModal() {
    console.log('hi');
    if (this.closeButton) this.closeButton.addEventListener('click', () => {
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
  }

}