export enum UI {

  ADD_LIST = `
  <div class="new-list__container">
  <div class="new-list__button target-add-list">
  <svg class="plus-icon target-add-list" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" fill="#F5F5F5" />
  </svg>
  <h5 class="target-add-list">Добавить колонку</h5>
  </div>
  </div>
  `,
  CREATE_LIST = `
  <div class="new-list__create-list">
  <input class='input' type="text" placeholder="Ввести заголовок списка">
  <div class="create-list__handler">
    <button class="add-list">Добавить список</button>
    <svg class="close-create-list" width="32" height="32" viewBox="0 0 32 32" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.4532 6.6665L15.9998 14.1198L8.5465 6.6665L6.6665 8.5465L14.1198 15.9998L6.6665 23.4532L8.5465 25.3332L15.9998 17.8798L23.4532 25.3332L25.3332 23.4532L17.8798 15.9998L25.3332 8.5465L23.4532 6.6665Z"
        fill="#1D1D1D" />
    </svg>
  </div>
</div>
  `,
}

export class BoardUI {

  static addList(title: string, id: string, position = '0') {
    return `
    <div class="list-container__wrapper" data-position="${position}" data-id="${id}">
      <div class="list-container__header">
        <h4 class="list-container__title">${title}</h4>
        <svg class="delete-card-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#1D1D1D"/>
        </svg>               
      </div>
      <div class="list-container__cards-container">
        <div class="list-container__add-card-wrapper">
        <div class="list-container__add-card target-add-card">
        <svg class="plus-icon target-add-card" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" />
        </svg>
        <h5 class="target-add-card">Добавить карточку</h5>
      </div>
        </div>
      </div>
    </div>
  `;
  }

  static addCard(title: string, id: string) {
    return `
    <div class="card-input-wrapper" data-id="${id}">
    <div class='card card-target'>
    <p class='card-target'>${title}</p>
    </div>
    </div>
  `;
  }

  static createList(placeholder: string) {
    return `
    <div class="new-list__create-list">
    <input class='input' type="text" placeholder="${placeholder}">
    <div class="create-list__handler">
      <button class="add-list">Добавить</button>
      <svg class="close-create-list" width="32" height="32" viewBox="0 0 32 32" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.4532 6.6665L15.9998 14.1198L8.5465 6.6665L6.6665 8.5465L14.1198 15.9998L6.6665 23.4532L8.5465 25.3332L15.9998 17.8798L23.4532 25.3332L25.3332 23.4532L17.8798 15.9998L25.3332 8.5465L23.4532 6.6665Z"
          fill="#1D1D1D" />
      </svg>
    </div>
    </div>
  `;
  }

  static cardModal() {
    return `
    <div class="card-modal-container">
    <div class="modal-container__wrapper">
      <div class="modal-container__header">
        <div class="modal-container__change-title">
        </div>
        <div class="modal-container__close-button">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.4532 6.6665L15.9998 14.1198L8.5465 6.6665L6.6665 8.5465L14.1198 15.9998L6.6665 23.4532L8.5465 25.3332L15.9998 17.8798L23.4532 25.3332L25.3332 23.4532L17.8798 15.9998L25.3332 8.5465L23.4532 6.6665Z"
              fill="#1D1D1D" />
          </svg>
        </div>
      </div>
      <div class="modal-container__content-wrapper">
            <button class="modal-container__remove-card">Удалить карточку</button>
      </div>
    </div>
  </div>
    `;
  }

}
