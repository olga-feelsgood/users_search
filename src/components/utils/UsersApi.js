class UsersApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    }
    else {
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  }

  getUsers() {
    return fetch(this._url, {
      headers: this._headers
    })
      .then(this._checkRes)
  }

  filterUsers(query) {
    return fetch(`${this._url}?term=${query}`, {
      headers: this._headers
    })
      .then(this._checkRes)
  }
}

const usersApi = new UsersApi({
  url: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default usersApi;