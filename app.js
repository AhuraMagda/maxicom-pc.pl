// nagłówek zmienia swój kolor
const sectionIntro = document.getElementById('intro');
const navBar = document.querySelector('nav')

const introObserverOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const introObserver = new IntersectionObserver(function(entries, introObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navBar.classList.remove('change-nav')
        } else {
            navBar.classList.add('change-nav')
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

const laptopCap = document.getElementById('laptop')
const laptopText = document.getElementById('laptop-text')
const laptopImg = document.getElementById('laptop-img')
const arrowDown = document.getElementById('arrow-down')
const arrowUp = document.getElementById('arrow-up')

const toggleVisibility = () => {
    if (laptopText.style.display === 'block') {
        laptopText.style.display = 'none'
        laptopImg.style.opacity = '1';
    } else {
        laptopText.style.display = 'block'
        laptopImg.style.opacity = '0.2';
    }
}
laptopCap.addEventListener('click', toggleVisibility)

// event bubbling?