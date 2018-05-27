class HttpService {
  uploadImage() {
    return new Promise(resolve => {
      const data = {
        result: "¡Va a fallar el penalti!",
        percentage: "56.93%"
      }
      resolve(data)
    })
    // return fetch('urlApi', {
    //   method: 'POST',
    //   headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       imgUploaded: 'https://i.imgur.com/Gi1ozhB.png',
    //     }),
    // })
  }
}

export const httpService = new HttpService();