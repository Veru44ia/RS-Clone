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

  static addList(title: string) {
    return `
    <div class="list-container__wrapper">
      <div class="list-container__header">
        <h4 class="list-container__title">${title}</h4>
        <svg class="list-container__settings" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"
            fill="#1D1D1D" />
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

  static addCard(title: string) {
    return `
    <div class="card-input-wrapper">
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
        <div class="modal-container__left-side"></div>
        <div class="modal-container__right-side">
        <div class="modal-container__semantic-container">
            <h6>Добавить в карточку</h6>
            <button class="modal-container__labels">Метки</button>
          </div>
          <div class="modal-container__semantic-container">
            <h6>Действия</h6>
            <button class="modal-container__remove-card">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }

}
