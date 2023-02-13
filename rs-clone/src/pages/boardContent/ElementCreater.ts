import { CardHandler } from './cardHandler';
import { UIWhithParams } from './ui';

export class ElementCreater {

  id: string;

  elemsContainer: string;

  targetContainer: string;

  addTitleContainer: string;

  plusElemParent: string;

  targetPlusElem: string;

  addElemButton: string;

  closeElemCreateButton: string;

  newElemContainer: string;

  placeholder: string;

  constructor(id: string, targetContainer: string, elemsContainer: string,
    plusElemParent: string, targetPlusElem: string, addTitleContainer: string,
    addElemButton: string, closeElemCreateButton: string, newElemContainer: string,
    placeholder: string) {
    this.id = id;
    this.targetContainer = targetContainer;
    this.elemsContainer = elemsContainer;
    this.plusElemParent = plusElemParent;
    this.targetPlusElem = targetPlusElem;
    this.addTitleContainer = addTitleContainer;
    this.addElemButton = addElemButton;
    this.closeElemCreateButton = closeElemCreateButton;
    this.newElemContainer = newElemContainer;
    this.placeholder = placeholder;
  }

  getElem(elemClass: string, startSearchPoin: Document | HTMLElement = document) {
    const elem: HTMLElement | null = startSearchPoin.querySelector(`${elemClass}`);
    return elem;
  }

  getClosestElem(element: HTMLElement, classSelector: string) {
    const elem: HTMLElement | null = element.closest(classSelector);
    return elem;
  }

  closeButton: HTMLElement | null = null;

  addButton: HTMLElement | null = null;

  ifNewListButtonHasEventListener = false;

  elemTitle = '';

  createNewElem() {
    const targetContainer: HTMLElement | null = this.getElem(this.targetContainer);
    if (!this.ifNewListButtonHasEventListener) {
      targetContainer?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const thisPlusContainer = this.getClosestElem(target, this.plusElemParent);
        if (target.classList.contains(`${this.targetPlusElem.slice(1)}`)) {
          this.ifNewListButtonHasEventListener = true;

          thisPlusContainer?.insertAdjacentHTML('afterbegin', `${UIWhithParams.createList(this.placeholder)}`);
          let addTitleContainer: HTMLElement | null = null;
          if (thisPlusContainer) addTitleContainer = this.getElem(this.addTitleContainer, thisPlusContainer);
          if (addTitleContainer) {
            this.closeButton = this.getElem(this.closeElemCreateButton, addTitleContainer);
            this.addButton = this.getElem(this.addElemButton, addTitleContainer);
            this.closeCreateNewList(addTitleContainer);
            if (thisPlusContainer) this.addNewElem(addTitleContainer, thisPlusContainer);
          }
        }
      });
    }
  }

  removeCreateNewList(container: HTMLElement) {
    if (container && container.parentNode) container.parentNode.removeChild(container);
  }

  closeCreateNewList(container: HTMLElement) {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.removeCreateNewList(container);
      });
    }
  }

  addNewElem(container: HTMLElement, plusElemContainer: HTMLElement) {
    if (this.addButton) {
      const input: HTMLInputElement | null = container.querySelector('.input');
      this.addButton.addEventListener('click', () => {
        if (input && input.value) {
          this.elemTitle = input.value;
          const newElem: HTMLElement = document.createElement('div');
          newElem.classList.add(`${this.newElemContainer.slice(1)}`);
          if (this.id === 'list') {
            newElem.insertAdjacentHTML('afterbegin', `${UIWhithParams.addList(this.elemTitle)}`);
          } else {
            newElem.insertAdjacentHTML('afterbegin', `${UIWhithParams.addCard(this.elemTitle)}`);
          }
          const elemsContainer = this.getClosestElem(plusElemContainer, `${this.elemsContainer}`);
          elemsContainer?.insertBefore(newElem, plusElemContainer);
          this.removeCreateNewList(container);
        }
      });
    }
  }

  start() {
    this.createNewElem();

    const cardHandler = CardHandler.getInstance();
    cardHandler.cardEventListener();
  }
}