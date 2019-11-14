

let audio = document.createElement('audio');
audio.addEventListener('load', () => {
  console.error('load');
});
// audio.addEventListener('error', err => {
//   console.error('err', err);
// });
audio.src = 'res/audio.mp3';

// let audio = my.createInnerAudioContext();
// audio.src = 'res/audio.mp3';
// audio.onError(err => {
//   console.error('err', err);
// });
// audio.onCanPlay(() => {
//   console.error('play');
//   audio.play();
// })