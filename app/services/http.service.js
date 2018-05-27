const cristianoDiccionary = {
  0: 'https://i.imgur.com/Gi1ozhB.png',
  1: 'https://i.imgur.com/gSw7vAv.png',
  2: 'https://i.imgur.com/PY3kblk.png',
  3: 'https://i.imgur.com/gSw7vAv.png',
  4: 'https://i.imgur.com/Csgfyqq.png',
}

const microsoftData = (imgNumber) => {
  return {
    "url": `${cristianoDiccionary[imgNumber]}`,
    "returnFaceAttributes": "emotion,"
  }
}

class HttpService {
  uploadImage(imgNumber) {
    console.log(microsoftData(imgNumber));
    return fetch('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '549519ac10054bbc8820528a7e11cf9e',
        },
        body: JSON.stringify(microsoftData(imgNumber))
      })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  getPercentage(emotions) {
    // console.log('Emotions en fetch');
    // console.log(emotions);
    // return fetch('http://10.0.2.2:5000/forecast', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emotions),
    // })
    // .then(res => res.json())
    let res = [];

    if (!this._first) {
      setTimeout(() => {
        res = ["si", 65.412];
        this._first = true;
      }, 8156)
    }
    setTimeout(() => {
      res = ["no", 87.412];
      this._first = true;
    }, 12156)
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  }
}

export const httpService = new HttpService();