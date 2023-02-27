
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

  // static async deleteBoard(id) {
  //   console.log(`id is: ${id}`);
  //   await fetch(`${backendUrl}/boards/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {})
  //     .catch((error) => console.log(error.message));
  //   updateBoardsUI();
  // }

  static async createList(boardID: string, title: string, position: string) : Promise<IList | void> {
    const createdBoard : IList | void = await fetch(`${API.backendUrl}/lists/create`, {
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
    return createdBoard;
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

}


