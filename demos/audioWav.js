my.downloadFile({
    url: 'https://creatorpp.cn/221_res/res/raw-assets/1d/1db6b48c-0f64-41ba-a2e0-03c023957a86.09d7a.wav', // 下载文件地址
    success: res => {
        console.error('download success', res);
        let audio = my.createInnerAudioContext();
        audio.src = res.apFilePath;
        audio.onCanPlay(() => {
          console.error('canplay');
        });
        audio.onError(err => {
          console.error('err',err);
        });
    },
    fail: res => {
      console.error('download fail', res);
    }
});