import { PageIDs } from '../../core/data/data';

export class HeaderHandler {
  signOutButton = document.querySelector('.user-sign-out');
  
  user: HTMLElement | null = document.querySelector('.user');

  SignOut() {
    this.signOutButton?.addEventListener('click', () => {
      localStorage.removeItem('userID');
      localStorage.removeItem('userLogin');

      window.location.hash = `#${PageIDs.AUTORIZATION_PAGE}`;
    }); 
  }

  userIcon() {
    const userName = localStorage.getItem('userLogin');
    if (this.user && userName) this.user.innerText = userName[0].toUpperCase();
  }

  start() {
    this.SignOut();
    this.userIcon();
  }
}
 