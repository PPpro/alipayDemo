let fs = my.getFileSystemManager();

fs.access({
    path: 'res/import/0d/0d669730c.json',
    success: res => {
        console.error('success', res);
    },
    fail: res => {
        console.error('fail', res);        
    },
});