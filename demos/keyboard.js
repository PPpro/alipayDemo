my.onTouchStart(() => {
    my.showKeyboard({
        defaultValue: '',
        maxLength: 10,
        multiple: false,
        confirmHold: false,
        confirmType: 'done',
        success () {
            console.error('success');
        },
        fail (res) {
            console.error('fail', res);
        },
    });
});