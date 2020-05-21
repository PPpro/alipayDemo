let img = my.createImage();
img.src = 'http://tools.itharbors.com/christmas/res/tree.png';
img.onload = function () {
    console.error('loaded');
}
img.onerror = res => {
    console.error('error', res);
}