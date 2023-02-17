import { BoardHandler } from '../boardContent/boardContent';

export class OpenBoard {
  title: string;

  color: string;

  boardID: number | undefined;

  constructor(title = 'No name', color = '#264653', boardID?: number) {
    this.title = title;
    this.color = color;
    this.boardID = boardID;
  }

  renderBoard() {
    const mainContainer = document.querySelector('.main');
    if (mainContainer) {
      mainContainer.innerHTML = '';
      mainContainer.insertAdjacentHTML('afterbegin', `
    <div class="board-total-container">
        <div class="board-total-container__header">
          <div class="title">
            <h2>${this.title}</h2>
          </div>
          <div class="board-options">
            <svg class="favorites option" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21.0001C11.355 20.4281 10.626 19.8331 9.85502 19.2001H9.84502C7.13002 16.9801 4.05302 14.4681 2.69402 11.4581C2.24754 10.4999 2.01093 9.45727 2.00001 8.40015C1.99703 6.94963 2.57879 5.55913 3.61383 4.54292C4.64887 3.5267 6.04981 2.97054 7.50002 3.00015C8.68065 3.00201 9.83586 3.34323 10.828 3.98315C11.264 4.26612 11.6584 4.6084 12 5.00015C12.3435 4.60994 12.7381 4.26786 13.173 3.98315C14.1648 3.3431 15.3197 3.00187 16.5 3.00015C17.9502 2.97054 19.3512 3.5267 20.3862 4.54292C21.4213 5.55913 22.003 6.94963 22 8.40015C21.9898 9.45896 21.7532 10.5033 21.306 11.4631C19.947 14.4731 16.871 16.9841 14.156 19.2001L14.146 19.2081C13.374 19.8371 12.646 20.4321 12.001 21.0081L12 21.0001ZM7.50002 5.00015C6.56853 4.98849 5.6701 5.34499 5.00002 5.99215C4.35441 6.62631 3.99358 7.49519 3.99994 8.40015C4.01135 9.17065 4.18585 9.93 4.51202 10.6281C5.15353 11.9269 6.01913 13.1022 7.06902 14.1001C8.06002 15.1001 9.20002 16.0681 10.186 16.8821C10.459 17.1071 10.737 17.3341 11.015 17.5611L11.19 17.7041C11.457 17.9221 11.733 18.1481 12 18.3701L12.013 18.3581L12.019 18.3531H12.025L12.034 18.3461H12.039H12.044L12.062 18.3311L12.103 18.2981L12.11 18.2921L12.121 18.2841H12.127L12.136 18.2761L12.8 17.7311L12.974 17.5881C13.255 17.3591 13.533 17.1321 13.806 16.9071C14.792 16.0931 15.933 15.1261 16.924 14.1211C17.9741 13.1237 18.8397 11.9487 19.481 10.6501C19.8131 9.94595 19.9901 9.17865 20.0001 8.40015C20.0042 7.49799 19.6435 6.63244 19 6.00015C18.3312 5.35007 17.4326 4.99063 16.5 5.00015C15.3619 4.99048 14.274 5.46752 13.51 6.31115L12 8.05115L10.49 6.31115C9.72609 5.46752 8.6381 4.99048 7.50002 5.00015Z"
                fill="#F5F5F5" />
            </svg>
            <svg class='menu option' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"
                fill="#F5F5F5" />
            </svg>
          </div>
        </div>
    </div>
    `);

      const boardTotalContainer = document.querySelector('.board-total-container');
      if (this.color.startsWith('url')) {
        (boardTotalContainer as HTMLElement).style.backgroundImage = `${this.color}`;
      } else {
        (boardTotalContainer as HTMLElement).style.background = `${this.color}`;
      }
    }
  }

  start() {
    this.renderBoard();
    const boardHandler = new BoardHandler();
    boardHandler.start();
  }
}