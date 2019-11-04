let audioPath = 'res/audio.mp3';

for (let i = 0; i < 10; ++i) {
  let audio = my.createInnerAudioContext();
  audio.src = audioPath;
  audio.onCanPlay(() => {
    audio.play();
    let j = i;
    console.warn(j);
    audio.onEnded(() => {
      console.error(j);
    });
  });
}