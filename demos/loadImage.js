let img = new Image();
img.addEventListener('load', () => {
    console.error('loaded image', img);
});
img.addEventListener('error', error => {
    console.error('loaded image', error);
});
img.src = './res/raw-assets/02/0275e94c-56a7-410f-bd1a-fc7483f7d14a.png';