
export interface IBoard {
  _id: string;
  title: string;
  background: string;
}

export interface IList {
  _id: string;
  title: string;
  position: string;
}

export interface ICrad {
  _id: string;
  title: string;
  position: string;
}

export class API {

  static backendUrl = 'https://fullstackproject-production.up.railway.app';

  static async createBoard(title: string, bg: string) : Promise<IBoard | void> {
    const createdBoard : IBoard | void = await fetch(`${API.backendUrl}/boards/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'http://127.0.0.1:5555',
      },
      body: JSON.stringify({
        title: `${title}`,
        owner: `${localStorage.getItem('userID')}`,
        background: `${bg}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error.message));
    return createdBoard;
  }

  static async getUserBoards() {
    let result;
    await fetch(`${this.backendUrl}/boards/${localStorage.getItem('userID')}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        result = data;
      })
      .catch((error) => console.log(error.message));
    console.log(result);
    return result;
  }

  static async deleteBoard(id: string) {
    console.log(`id is: ${id}`);
    await fetch(`${this.backendUrl}/boards/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error.message));
  }

  static async createList(boardID: string, title: string, position: string) : Promise<IList | void> {
    const createdList : IList | void = await fetch(`${API.backendUrl}/lists/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'http://127.0.0.1:5555',
      },
      body: JSON.stringify({
        title: `${title}`,
        board: `${boardID}`,
        position: `${position}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error.message));
    return createdList;
  }

  static async getBoardLists(boardID:string): Promise<IList[] | void> {
    const result: IList[] | void = await fetch(`${this.backendUrl}/lists/${boardID}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error.message));
    return result;
  }

  static async deleteList(id: string) {
    console.log(`id is: ${id}`);
    await fetch(`${this.backendUrl}/lists/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error.message));
  }

  static async createCard(listID: string, title: string, position: string) : Promise<ICrad | void> {
    const createdCard: ICrad | void = await fetch(`${API.backendUrl}/cards/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'http://127.0.0.1:5555',
      },
      body: JSON.stringify({
        title: `${title}`,
        list: `${listID}`,
        position: `${position}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error.message));
    return createdCard;
  }

  static async getListCards(listID:string): Promise<ICrad[] | void> {
    const result: ICrad[] | void = await fetch(`${this.backendUrl}/cards/${listID}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error.message));
    return result;
  }

  static async deleteCard(id: string) {
    console.log(`id is: ${id}`);
    await fetch(`${this.backendUrl}/cards/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error.message));
  }

}


