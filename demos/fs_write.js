let fs = my.getFileSystemManager();
fs.writeFile({
  filePath: my.env.USER_DATA_PATH + '/test/b.json',
  data: "test",
  encoding: 'utf8',
});