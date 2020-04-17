const textContentBlock = document.querySelectorAll('.textContentBlock') as NodeListOf<HTMLElement>;

textContentBlock.forEach((el, i) => {
    if(i % 2 != 0) {

        el.style.setProperty('text-align', 'right');
    }
});

