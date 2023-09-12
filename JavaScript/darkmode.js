let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
};


let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};

const sr = ScrollReveal({
    distance: '70px',
    reset: true,
    duration: 2700, 
})
sr.reveal('text-box',{delay: 200, origin: 'bottom'})
sr.reveal('.mainmenu-img',{delay: 350, origin: 'top'})