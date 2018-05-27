class HttpService {
  uploadImage() {
    return fetch('urlApi', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imgUploaded: 'https://i.imgur.com/Gi1ozhB.png',
        }),
    })
  }
}

export const httpService = new HttpService();