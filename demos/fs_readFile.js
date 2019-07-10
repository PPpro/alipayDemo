my.downloadFile({
    url: 'https://creatorpp.cn/zfbres/res/import/07/07ce7530a.json', // 下载文件地址
    success: (res) => {
      console.error('download success', res);
      
      let fs = my.getFileSystemManager();
      fs.readFile({
          filePath: res.apFilePath,
          encoding: 'utf8',
          success: res => {
            console.error('read success', res);
          },
          fail: res => {
            console.error('read fail', res);
          }
      });
    },
    fail: res => {
      console.error('download fail', res);
    }
  });