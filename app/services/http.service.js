const cristianoDiccionary = {
  0: 'https://i.imgur.com/Gi1ozhB.png',
  1: 'https://i.imgur.com/FJ8Yjhp.png',
  2: 'https://i.imgur.com/PY3kblk.png',
  3: 'https://i.imgur.com/jBqoADW.png',
  4: 'https://i.imgur.com/Csgfyqq.png',
}

class HttpService {
  uploadImage(imgNumber) {
    // return new Promise(resolve => {
    //   const data = {
    //     result: "¡Va a fallar el penalti!",
    //     percentage: "56.93%"
    //   }
    //   resolve(data)
    // })
    return fetch('urlApi', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imgUploaded: `${cristianoDiccionary.imgNumber}`,
        }),
    })
  }
}

export const httpService = new HttpService();