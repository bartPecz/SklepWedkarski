document.addEventListener('DOMContentLoaded', ()=>{
    const navBar = document.querySelectorAll('.navBar > div');
    navBar[0].addEventListener('click', (e)=>{
        navBar.forEach((el,i)=>{
            if(i!=0) el.classList.toggle('navBarLRShow');
            else {
                if(el.style.getPropertyValue('background-color')=='rgb(187, 59, 59)'){
                    el.style.setProperty('background-color','rgb(190, 82, 82)');
                }
                else{
                    el.style.setProperty('background-color', 'rgb(187, 59, 59)');
                }

            }
        });
    });

    window.addEventListener('resize', ()=>{
        if(window.innerWidth>410){
            navBar.forEach((el, i)=>{
                i!=0 ? el.classList.remove('navBarLRShow') : el.style.setProperty('background-color', 'rgb(190, 82, 82)');
            });
        }
    });
});
