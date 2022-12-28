const menuIcon=document.getElementById('icon-hamburger');
const menu=document.getElementById('menu');
const blackHeader=document.getElementById('header')

menuIcon.addEventListener('click',(event)=>{
    if(event.target.dataset.icon === 'hamburger'){
        event.target.src='assets/images/icon-close.svg';
        event.target.dataset.icon='close';
    }
 else{
    event.target.src='assets/images/icon-hamburger.svg';
    event.target.dataset.icon='hamburger';
 }

 blackHeader.classList.toggle('header--black');
 menu.classList.toggle('menu--show');
})

window.addEventListener('resize', () => {
    if (menu.classList.contains('menu--show') && window.matchMedia("(min-width:768px)").matches) {
        menu.classList.remove('menu--show')
    }
})

const options = {
    root: null,
    rootMargin: '300px 300px',
    threshold: 1,

};

const callback = (entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('gallery__item')) {
                entry.target.classList.add('transition')
            }
        }
    })
}

const observer = new IntersectionObserver(callback, options)

const galleryItems = document.querySelectorAll('.gallery__item')

for (const item of galleryItems) {
    observer.observe(item)
}

