export class ModalUI {

  static addDescription() {
    return `
    <div class="description-container">
    <div class="description-container__title">
        <svg class="description-container__title-icon icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19H3V17H15V19ZM21 15H3V13H21V15ZM15 11H3V9H15V11ZM21 7H3V5H21V7Z" fill="#1D1D1D" />
        </svg>
      <h3>Описание</h3>
      <button>Изменить</button>
    </div>
    <div class="description-container__description">
      <p>No description</p>
    </div>
  </div>
  `;
  }

  static addTitle(title: string) {
    return `
    <div class="modal-container__title-icon icon">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3335 14H2.66683C1.93045 14 1.3335 13.403 1.3335 12.6667V3.33333C1.3335 2.59695 1.93045 2 2.66683 2H13.3335C14.0699 2 14.6668 2.59695 14.6668 3.33333V12.6667C14.6668 13.403 14.0699 14 13.3335 14ZM2.66683 4.66667V12.6667H13.3335V4.66667H2.66683Z"
                fill="#1D1D1D" />
            </svg>
          </div>
          <input class="title" type="text" value="${title}" class="modal-container__title-input">
    `;
  }

}