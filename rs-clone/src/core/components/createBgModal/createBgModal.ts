import './createBgModal.css';

class BackgroundModal {
  container: HTMLElement;

  constructor(className: string) {
    this.container = document.createElement('div');
    this.container.className = className;
  }

  openModal() {
    const modalContainer = document.body.querySelector('.modal-container') as HTMLElement;
    modalContainer.addEventListener('click', (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.list-item .last-button')) {
        modalContainer.append(this.render());
      }
    });
  }

  closeModal() {
    const closeIcon = this.container.querySelector('.close-modal');
    this.container.addEventListener('click', (event: MouseEvent) => {
      if (
        (event.target as HTMLElement) === this.container ||
        (event.target as HTMLElement) === closeIcon
      ) {
        this.container.remove();
      }
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="modal-wrapper bg">
        <p class="modal-title">Фон доски</p>
        <button type="button" class="close-modal">x</button>
        <section>
          <div class="bg-modal-wrapper">
            <p class="preview-title">Фотографии</p>
            <button type="button">Подробнее</button>
          </div>
          <ul class="modal-list-top images">
            <li class="list-item">
              <button type="button" class="btn tick" style="background-image: url(https://images.unsplash.com/photo-1675025844397-9819eb7091ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" style="background-image: url(https://images.unsplash.com/photo-1675084364782-605b9986b6ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" style="background-image: url(https://images.unsplash.com/photo-1675016137839-78059b6ef795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" style="background-image: url(https://images.unsplash.com/photo-1675050757561-741bd739bc06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" style="background-image: url(https://images.unsplash.com/photo-1675981004510-4ec798f42006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc2NDgwNzIx&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" style="background-image: url(https://images.unsplash.com/photo-1675966356873-06f6eedffeb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc2NDgwNzIx&ixlib=rb-4.0.3&q=80&w=400);"></button>
            </li>  
          </ul>
        </section>
        <section>
          <div class="bg-modal-wrapper bottom">
            <p class="preview-title">Цвета</p>
            <button type="button">Подробнее</button>
          </div>
          <ul class="modal-list-bottom colors">
            <li class="list-item">
              <button type="button" class="btn" title="Синий" style="background-color: #0079bf"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" title="Оранжевый" style="background-color: #ed992b"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" title="Зеленый" style="background-color: #3c991d"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" title="Красный" style="background-color: #de4528"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" title="Фиолетовый" style="background-color: #7d4699"></button>
            </li>
            <li class="list-item">
              <button type="button" class="btn" title="Розовый" style="background-color: #cd5a91"></button>
            </li>  
          </ul>
        </section>
      </div>  
    `;
    this.closeModal();
    return this.container;
  }
}

export default BackgroundModal;