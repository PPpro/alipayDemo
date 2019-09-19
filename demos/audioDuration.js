// 获取音频 duration 和 currentTime 报错

// 这个音频不会报错
// let audioPath = 'https://creatorpp.cn/audioTest/audio.mp3';

// 报错的音频
let audioPath = 'http://tools.itharbors.com/christmas/res/sounds/ss.mp3';

let audio = my.createInnerAudioContext();
audio.src = audioPath;
audio.onCanPlay(() => {
  audio.play();
  console.error(audio.duration, audio.currentTime);
});