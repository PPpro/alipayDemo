let fs = my.getFileSystemManager();
let copyPath = my.env.USER_DATA_PATH + '/cachedAudio.mp3';
my.downloadFile({
    url: 'https://creatorpp.cn/audioTest/audio.mp3', // 下载文件地址
    success: res => {
        console.error('download success', res);

        // BUG: 使用下载后的临时路径，播放失败
        let audio = my.createInnerAudioContext();
        audio.src = res.apFilePath;
        audio.play();
        
        fs.copyFile({
            srcPath: res.apFilePath,
            destPath: copyPath,
            success () {
                console.error('copy file finished:', copyPath);
                // BUG: 使用拷贝后的路径，播放失败
                let audio = my.createInnerAudioContext();
                audio.src = copyPath;
                audio.play();
            },
            fail (res) {
                console.error('copy file failed:', res);
            }
        });
    },
    fail: res => {
      console.error('download fail', res);
    }
});

// 直接播放成功
// let audio = my.createInnerAudioContext();
// audio.src = 'https://creatorpp.cn/audioTest/audio.mp3';
// audio.play();