// nagłówek zmienia swój kolor
const sectionIntro = document.getElementById('intro');
const navBar = document.querySelector('nav')
const navMenu = document.querySelectorAll('nav a')

const introObserverOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const introObserver = new IntersectionObserver(function(entries, introObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navBar.classList.remove('change-nav')
            navMenu.forEach(nav => nav.classList.remove('text-to-white'))
        } else {
            navBar.classList.add('change-nav')           
            navMenu.forEach(nav => nav.classList.add('text-to-white'))

        }
    })
}, introObserverOptions);


introObserver.observe(sectionIntro)

// -----------------------------------------------------------------------------------


// obrazki mają dwie klasy, żeby wywołać efekt migotania (w miarę wyszło)
const imagesBox = document.getElementById('main')
const firstImages = document.querySelectorAll('.first-fading')
const secondImages = document.querySelectorAll('.second-fading')


const imagesObserverOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const imagesObserver = new IntersectionObserver(function(entries, imagesObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let delay = 1000;
            firstImages.forEach(image => {
                setTimeout ( () => {image.classList.add('change-image')}, delay)
                delay += 300;
            })
            let delay2 = 2100;
            secondImages.forEach(image => {
                setTimeout ( () => {image.classList.add('change-image')}, delay2)
                delay2 += 300;
            })
        } else {
            firstImages.forEach(image => image.classList.remove('change-image'))
            secondImages.forEach(image => image.classList.remove('change-image'))
        }
    })
}, imagesObserverOptions);

imagesObserver.observe(imagesBox)
//  -----------------------------------------------------------------------------------

// chowanie i pokazywanie opisu obrazka na przykładzie laptopa

// 1 laptop
const laptopText = document.querySelector('#laptop p')
const laptopImg = document.querySelector('#laptop img')
const laptopArrow = document.querySelector('#serwis div')

// 2 service
const serviceText = document.querySelector('#serwis p')
const serviceImg = document.querySelector('#serwis img')
const serviceArrow = document.querySelector('#serwis div')

// 3 CPU
// 4 printer
// 5 windows
// 6 mouse

// const toggleVisibility = () => {
//     if (laptopText.style.display === 'block') {
//         laptopText.style.display = 'none'
//         laptopImg.style.opacity = '1';
//     } else {
//         laptopText.style.display = 'block'
//         laptopImg.style.opacity = '0.2';
//     }
// }

const toggleVisibility = (text, img) => {
    if (text.style.display === 'block') {
        text.style.display = 'none'
        img.style.opacity = '1';
    } else {
        text.style.display = 'block'
        img.style.opacity = '0.2';
    }
}

