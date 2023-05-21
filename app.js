// nagłówek zmienia swój kolor
const sectionIntro = document.getElementById('intro');
const navBar = document.querySelector('nav')
const navMenu = document.querySelectorAll('nav a')

// const introObserverOptions = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-150px"
// }

// const introObserver = new IntersectionObserver(function(entries, introObserver) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             navBar.classList.remove('change-nav')
//             navMenu.forEach(nav => nav.classList.remove('text-to-white'))
//         } else {
//             navBar.classList.add('change-nav')           
//             navMenu.forEach(nav => nav.classList.add('text-to-white'))

//         }
//     })
// }, introObserverOptions);


// introObserver.observe(sectionIntro)

// -----------------------------------------------------------------------------------


// obrazki mają dwie klasy, żeby wywołać efekt migotania
const imagesBox = document.querySelector('.offer-box')
const firstImages = document.querySelectorAll('.first-fading')
const secondImages = document.querySelectorAll('.second-fading')


const imagesObserverOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
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
const laptopArrow = document.querySelector('#laptop div')

// 2 service
const serviceText = document.querySelector('#service p')
const serviceImg = document.querySelector('#service img')
const serviceArrow = document.querySelector('#service div')

// 3 CPU
const cpuText = document.querySelector('#cpu p')
const cpuImg = document.querySelector('#cpu img')
const cpuArrow = document.querySelector('#cpu div')

// 4 printer
const printerText = document.querySelector('#printer p')
const printerImg = document.querySelector('#printer img')
const printerArrow = document.querySelector('#printer div')

// 5 windows
const windowsText = document.querySelector('#windows p')
const windowsImg = document.querySelector('#windows img')
const windowsArrow = document.querySelector('#windows div')

// 6 mouse
const mouseText = document.querySelector('#mouse p')
const mouseImg = document.querySelector('#mouse img')
const mouseArrow = document.querySelector('#mouse div')

const toggleVisibility = (text, img) => {
    if (text.style.display === 'block') {
        text.style.display = 'none';
        img.style.opacity = '1';
    } else {
        text.style.display = 'block'
        img.style.opacity = '0.2';
    }
}

// const toggleVisibility = (text, img) => {
//     if (text.style.display === 'block') {
//         text.style.display = 'none'
//         img.style.opacity = '1';
//     } else {
//         text.style.display = 'block'
//         img.style.opacity = '0.2';
//     }
// }

laptopArrow.addEventListener("click", function() {toggleVisibility(laptopText, laptopImg)})
serviceArrow.addEventListener("click", function() {toggleVisibility(serviceText, serviceImg)})
cpuArrow.addEventListener("click", function() {toggleVisibility(cpuText, cpuImg)})
printerArrow.addEventListener("click", function() {toggleVisibility(printerText, printerImg)})
windowsArrow.addEventListener("click", function() {toggleVisibility(windowsText, windowsImg)})
mouseArrow.addEventListener("click", function() {toggleVisibility(mouseText, mouseImg)})
