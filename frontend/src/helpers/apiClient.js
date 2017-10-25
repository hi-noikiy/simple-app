export default class ApiClient {
  constructor(url, options = {}) {
    const { isAuthRequired, queryParams } = options;

    this.url = url;
    this.isAuthRequired = isAuthRequired;
    this.queryParams = queryParams;

    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  get = (startIndex) => {
    return fetch(this.url, {
      headers: {}
    })
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
