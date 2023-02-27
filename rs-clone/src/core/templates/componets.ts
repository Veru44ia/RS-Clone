abstract class Component {
  protected container: HTMLElement | null;

  protected position: InsertPosition;

  protected content: string;

  constructor(className: string) {
    this.container = document.querySelector(`.${className}`);
    this.position = 'afterbegin';
    this.content = '';
  }

  render() {
    if (this.container) this.container.insertAdjacentHTML(this.position, this.content);
    return this.container;
  }
}

export default Component;