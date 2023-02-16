class LocalStorage {
  static getFromLocalStorage() {
    if (localStorage.getItem('board') as string) {
      return JSON.parse(localStorage.getItem('board') as string);
    } else {
      const board = [{
        id: 0,
        name: 'Создать доску', 
        color: '#e2e2e2', 
      }];
      localStorage.setItem('board', JSON.stringify(board));
      return board;
    }
  }
}

export default LocalStorage;