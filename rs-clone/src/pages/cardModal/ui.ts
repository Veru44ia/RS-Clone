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
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
  `;
  }

}