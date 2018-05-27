const cristianoDiccionary = {
  0: 'https://i.imgur.com/Gi1ozhB.png',
  1: 'https://i.imgur.com/FJ8Yjhp.png',
  2: 'https://i.imgur.com/PY3kblk.png',
  3: 'https://i.imgur.com/jBqoADW.png',
  4: 'https://i.imgur.com/Csgfyqq.png',
}

const mockedData = {
  "anger": [0.0360],
  "contempt": [0.1651],
  "disgust": [0.1309],
  "fear": [0.0271],
  "happiness": [0.0286],
  "neutral": [0.0804],
  "sadness": [0.0183],
  "surprise": [0.5136]
}

const microsoftData = {
  "url": `${cristianoDiccionary[imgNumber]}`,
  "returnFaceAttributes": "emotion,"
}

class HttpService {
  uploadImage(imgNumber) {
    return fetch('https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '549519ac10054bbc8820528a7e11cf9e',
        },
        body: JSON.stringify(microsoftData)
      })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  getPercentage(emotions) {
    return fetch('http://localhost:5000/forecast', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emotions),
    })
  }
  // parseEmotions(emotions) {
  //   console.log('❤️ Emotions received')
  //   console.log(emotions);
  //   let parsed = {}
  //   Object.keys(emotions).map((el, index) => {
  //     parsed[el] = [emotions[el]]
  //   });
  //   console.log('Parsed =>')
  //   console.log(parsed);
  //   return parsed;
  // }
}

export const httpService = new HttpService();