import './aside.css';

class Aside {
  container: HTMLElement;

  content: string;

  position: InsertPosition;

  constructor() {
    this.container = document.createElement('aside');
    this.content = `
      <ul class="aside-list">
        <li class="aside-item">
          <a class="aside-link" href="#"><span class="icon icon-board"></span>Доски</a>
        </li>
        <li class="aside-item">
          <a class="aside-link" href="#"><span class="icon icon-template"></span>Шаблоны</a>
        </li>
        <li class="aside-item">
          <a class="aside-link" href="#"><span class="icon icon-settings"></span>Настройки</a>
        </li>
      </ul> 
    `;
    this.position = 'afterbegin';
  }

  render() {
    this.container.insertAdjacentHTML(this.position, this.content);
    return this.container;
  }
}

export default Aside;