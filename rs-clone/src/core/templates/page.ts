abstract class Page {
  protected container: HTMLElement;

  protected position: InsertPosition;

  protected content: string;

  constructor() {
    this.container = document.createElement('div');
    this.position = 'afterbegin';
    this.content = '';
  }

  render() {
    this.container.insertAdjacentHTML(this.position, this.content);
    return this.container;
  }
}

export default Page;