
export interface IBoard {
  _id: string;
  title: string;
  background: string;
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

}


