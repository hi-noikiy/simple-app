// const postApiClient = new ApiClient('http://localhost:3333/post');

// const commentApiClient = new ApiClient('http://localhost:3333/comment');


// commentApiClient.get()
// commentApiClient.post()


// fetch('urlsadfasfdj', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${localStorage.jwt}`,
//   }
// }).then((resp) => resp.json())
//   .then((data) => console.log(data))


export default class ApiClient {
  constructor(url, isAuthRequired = false) {
    this.url = url;
    this.isAuthRequired = isAuthRequired;
    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  get = (startIndex) => {
    console.log(startIndex);
    return fetch(`${this.url}?startIndex=${startIndex}`)
      .then(data => data.json())
  }

  update = (id, body) => {
    return fetch(`${this.url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: this.headers,
    })
      .then(data => data.json())
  }
}
