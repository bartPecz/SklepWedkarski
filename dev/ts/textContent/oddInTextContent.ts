const textContentBlock = document.querySelectorAll('.textContentBlock');

textContentBlock.forEach((el: HTMLElement, i) => {
    if(i % 2 != 0) {

        el.style.setProperty('text-align', 'right');
    }
});

