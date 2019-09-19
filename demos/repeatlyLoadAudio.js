// 两次加载本地音频，音频播放会出现异常，OPPO R11
let audioPath = 'res/audio.mp3';
// 加载服务器上的音频就没问题
// let audioPath = 'https://creatorpp.cn/audioTest/audio.mp3';

let audio = my.createInnerAudioContext();
audio.src = audioPath;
audio.onCanPlay(() => {
  let audio2 = my.createInnerAudioContext();
  audio2.src = audioPath;
  audio2.onCanPlay(() => {
    audio2.play();
  });
});