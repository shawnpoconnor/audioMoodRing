import request from 'superagent';
const config = require('../secrets.json');

const URL = 'https://api.sonicAPI.com/analyze/melody';
const MAX_MIDI = 127;

export const test = (file) =>
  new Promise((resolve, reject) =>
    request
      .post(URL)
      .field('detailed_result', true)
      .field('access_id', config.sonicApi)
      .field('format', 'json')
      .attach('input_file', new File(file, 'input.wav'))
      .end((error, response) =>
        error
          ? reject(error)
          : resolve(toNotes(response.body))));

const toNotes = (response) =>
  response.melody_result.pitch_curve.map(note => ({
    pitch: note.midi_pitch / MAX_MIDI,
    startTime: note.time,
    volume: note.volume
  }));

export const analyzeFile2 = (file, cb) => {
  const token = 'jQ2PIxK8JlKxm0twpePTvEYZ27PRSCQtiYau2SzkykeS5rJ4evqlOz0ClJkf85C9N65H0Ws94Q6uKnPSUIIyFzPNeLmcqlUo3TQMvVaLnfmP3rAxo%2FkQDW8NBLA0wSTibONi2qL0LgMB%2Bk4vw1zzaHJiMfGe1WtHebfHlZCbxCwu%2F%2FXTs1DigE%2BAoF7NTED%2BayZKLLK%2B3yB4EwoOiI2mzZJnz7np5jfh0idvQ5Ze0bTPaze4P0oBkYABHMdqIFY0EVguCqhPrjFUzxW1NBjCKPQl2f9ZbUnc0K6QgzG27S7IbHeBnFqljtXV2wvKWS6HxCHEs0ynRCfVfxMrNQHkvk0Bmjo%2BrKDSD%2FJG3%2BsE2Aw95UEaaj%2BFNQ9q3KdbxKb5TNUd657Oixm3tFQghOXLYSjpTkd1aeovnSlgfoLir0wCRZLybBcLr91A4Z24pi33Tproz0Y7fsWevcOwxTs6gqto1tVE6oDc0eq59fD4iC7byNpHzvgJHdFvgdfUAqcB%2F3kC2I3J4YWn2e8Y7939sYG9%2BJ%2BhgpJdhHQd%2Bb1XY0iDjB1Gmj1Mx7%2BaHptoovryGu5IZRrMoAGy3ziwrhRO3U96eWQMKabjLWEnifRTKx9nWNYmDXMb2JgSWMVlcExNJQRFL3rKT%2F8nJw3P%2BSE2JqBR4C5BRfDdRn9jTEQ4rGb132ftkDo%2FqK5IH%2BbQCz3ICinpv6Oij9XLFBAmcKMTRK7VMxITP1cI6MJjFrYzeBZljPPP5pBaRlTeChknEeJa4ER0M0ITQYyLWHBuiFKIyei3alYburBOxsR1%2FYAtVHuPTNhsbI0RMXcH8PdaN0opU8itU%2Ba9o8Y90VwbkKitqXs4BX6%2Fndiv1Jl%2BFPWYZWvi8cH2TFbFXvrpUzxWtPicjYnuPp801lSvdO6yzk9fbCQbuM7akbqILRj2H0%2Fv9qhO2Iv447E5Q9WA%2FglRlf5o';
  const message = {
    action: 'start',
    'content-type': 'audio/wav',
    continuous: true,
    'interim_results': true,
    'max-alternatives': 3,
  };

  const websocket = new WebSocket(`wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=${token}&model=en-US_BroadbandModel`);

  const onOpen = (evt) => {
    websocket.send(JSON.stringify(message));
    websocket.send(new File(file, 'input.wav'));
    websocket.send(JSON.stringify({action: 'stop'}));
  }

  const onMessage = (evt) => {
    const data = JSON.parse(evt.data);
    if(data.results) {
      console.log(data.results[0].alternatives[0].transcript)
      cb(data.results[0].alternatives[0].transcript);
    }
  }

  websocket.onopen = onOpen;
  websocket.onmessage = onMessage;
}
