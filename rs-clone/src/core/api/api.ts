export class API {

  static backendUrl = 'https://fullstackproject-production.up.railway.app';

  static async createBoard(title: string, bg: string) {
    await fetch(`${API.backendUrl}/boards/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'http://127.0.0.1:5555',
      },
      body: JSON.stringify({
        title: `${title}`,
        owner: `${localStorage.getItem('userID')}`,
        bg: `${bg}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error.message));
  }

}
