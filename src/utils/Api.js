class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  //  проверяем все ли впорядке с ответом
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo(inputValue) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        name: inputValue.name,
        about: inputValue.about,
      }),
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserAvatar(userAvatar) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: userAvatar.avatar,
      }),
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setNewCard(inputValue) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      body: JSON.stringify({
        name: inputValue.name,
        link: inputValue.link,
      }),
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  putLike(cardId) {
    return fetch(this._url + `/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(this._url + `/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(this._url + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: '61ec0817-2cd1-4935-b48e-293d9bfb9a8c',
    'Content-Type': 'application/json',
  },
});
