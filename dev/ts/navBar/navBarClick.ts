document.addEventListener('DOMContentLoaded', () => {

    const navBars = document.querySelectorAll('.navBar > div');
    const navBarTiles = document.querySelector('.navBarTiles') as HTMLElement;
    const navBarTilesUl = document.querySelector('.navBarTiles > ul') as HTMLElement;

    navBars[0].addEventListener('click', () => {

        navBars.forEach((el: HTMLElement, i) => {

            if(i != 0) el.classList.toggle('navBarLRShow');
            else {

                if(el.style.getPropertyValue('background-color') == 'rgb(187, 59, 59)') el.style.setProperty('background-color','rgb(190, 82, 82)');
                else el.style.setProperty('background-color', 'rgb(187, 59, 59)');
            }
        });
    });

    if(window.innerWidth <= 410){

        navBarTiles.classList.add('removeHover');
        navBarTilesUl.style.setProperty('position', 'static');
    } 

    window.addEventListener('resize', () => {
        if(window.innerWidth > 410){

            navBars.forEach((el: HTMLElement, i) => {

                i != 0 ? el.classList.remove('navBarLRShow') : el.style.setProperty('background-color', null);
            });

            navBarTiles.classList.remove('removeHover');
            navBarTiles.style.setProperty('background-color', null);

            navBarTilesUl.style.setProperty('display', null);
            navBarTilesUl.style.setProperty('position', null);
            navBarTilesUl.style.setProperty('background-color', null);
        }
        else if(window.innerWidth <= 410) navBarTilesUl.style.setProperty('position', 'static');
        
    });

    navBarTiles.addEventListener('click', function() {
       
        if(window.innerWidth <= 410) {

            const style = navBarTiles.style;
            const styleUl = navBarTilesUl.style; 
            

            if(style.getPropertyValue('background-color') == 'rgb(187, 59, 59)') style.setProperty('background-color', null);
            else style.setProperty('background-color', 'rgb(187, 59, 59)');
            
            styleUl.setProperty('background-color', 'rgb(187, 59, 59)');

            if(styleUl.getPropertyValue('display') == 'block') styleUl.setProperty('display', 'none')
            else {

                styleUl.setProperty('display', 'block');
                styleUl.setProperty('border-bottom', '1px solid rgb(138, 46, 46)');
            }             
        }
    });
});

