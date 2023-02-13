
export class Modal {

  closeButton: HTMLElement | null = document.querySelector('.modal-container__close-button');

  modal = document.querySelector('.modal-container');

  closeModal() {
    if (this.closeButton) this.closeButton.addEventListener('click', () => {
      this.modal?.remove();
    });
  }

  start() {
    this.closeModal();
  }

}