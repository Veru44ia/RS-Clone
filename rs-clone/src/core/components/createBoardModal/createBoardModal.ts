import './createBoardModal.css';

class Modal {
  container: HTMLElement;

  constructor(className: string) {
    this.container = document.createElement('div');
    this.container.className = className;
  }

  openModal() {
    window.onload = () => {
      const boardsContainer = document.body.querySelector('.button-create-board') as HTMLElement;
      boardsContainer.addEventListener('click', () => {
        const mainContainer = document.body.querySelector('.boards-container') as HTMLDivElement;
        mainContainer.append(this.render());
      });
    };
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

  buttonsListeners() {
    document.addEventListener('click', (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.modal-list-top')) { 
        const item = event.target as HTMLButtonElement;
        this.changePreviewImage(item.style.backgroundImage);
      }  
    });
  }

  changePreviewImage(image: string) {
    const preview = document.querySelector('.modal-board-preview') as HTMLElement;
    preview.style.backgroundImage = image;
  }

  render() {
    this.container.innerHTML = `
      <div class="modal-wrapper">
        <p class="modal-title">Создать доску</p>
        <button type="button" class="close-modal">x</button>
        <div class="modal-wrap">
          <div class="modal-board-preview">
            <div class="modal-inner"></div>
          </div>
        </div>
        <div class="modal-preview">
          <p class="preview-title">Фон</p>
          <div class="modal-backgrounds">
            <ul class="modal-list-top">
              <li class="list-item">
                <button type="button" class="tick" style="background-image: url(https://images.unsplash.com/photo-1675025844397-9819eb7091ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
              </li>
              <li class="list-item">
                <button type="button" style="background-image: url(https://images.unsplash.com/photo-1675084364782-605b9986b6ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
              </li>
              <li class="list-item">
                <button type="button" style="background-image: url(https://images.unsplash.com/photo-1675016137839-78059b6ef795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
              </li>
              <li class="list-item">
                <button type="button" style="background-image: url(https://images.unsplash.com/photo-1675050757561-741bd739bc06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjc1NjAyNjU3&ixlib=rb-4.0.3&q=80&w=400);"></button>
              </li>
            </ul>
            <ul class="modal-list-bottom">
              <li class="list-item">
                <button type="button" title="Синий" style="background-color: #0079bf"></button>
              </li>
              <li class="list-item">
                <button type="button" title="Оранжевый" style="background-color: #ed992b"></button>
              </li>
              <li class="list-item">
                <button type="button" title="Зеленый" style="background-color: #3c991d"></button>
              </li>
              <li class="list-item">
                <button type="button" title="Красный" style="background-color: #de4528"></button>
              </li>
              <li class="list-item">
                <button type="button" title="Фиолетовый" style="background-color: #7d4699"></button>
              </li>
              <li class="list-item">
                <button type="button"><span class="dots">...</span></button>
              </li>
            </ul>
          </div>
        </div>
        <form class="form">
          <label class="input-label">
            <span class="input-title">Заголовок доски <span class="star">*</span></span>
            <input type="text" class="text-input name" name="name" placeholder="Укажите название доски" />
          </label> 
          <button class="submit-button" type="submit" disabled>Создать</button>
          <p class="modal-text">Используя изображения с сайта Unsplash, вы принимаете <a href="https://unsplash.com/terms" target="_blank">Условия его использования</a> и <a href="https://unsplash.com/license" target="_blank">правила лицензии</a></p>
        </form> 
      </div>  
    `;
    this.closeModal();
    this.buttonsListeners();
    return this.container;
  }
}

export default Modal;