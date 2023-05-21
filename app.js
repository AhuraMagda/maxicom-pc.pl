// icons have 2 classes to make a "shine effect"
const imagesBox = document.querySelector('.cards-container')
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
