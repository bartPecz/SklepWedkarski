export {};

document.addEventListener('DOMContentLoaded', () => {

    const navBars = document.querySelectorAll('.navBar > div');

    navBars[0].addEventListener('click', () => {

        navBars.forEach((el: HTMLElement, i) => {

            if(i != 0) el.classList.toggle('navBarLRShow');
            else {

                if(el.style.getPropertyValue('background-color') == 'rgb(187, 59, 59)'){

                    el.style.setProperty('background-color','rgb(190, 82, 82)');
                }
                else{
                    el.style.setProperty('background-color', 'rgb(187, 59, 59)');
                }

            }
        });
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 410){

            navBars.forEach((el: HTMLElement, i) => {

                i != 0 ? el.classList.remove('navBarLRShow') : el.style.setProperty('background-color', 'rgb(190, 82, 82)');
            });
        }
    });
});

