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
            // lepiej toggle dodatkową klasę niż dawać tak
            navBar.style.backgroundColor = 'white';
            navBar.style.top = "0px"
        } else {
            navBar.style.backgroundColor = 'black';
        }
    })
}, introObserverOptions);


introObserver.observe(sectionIntro)




// robimy obracające się obrazki po dojechaniu na stronę, jeden raz

const spinningImages = document.querySelectorAll('.spinning-image')


const imagesObserverOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0px 0px -200px 0px"
}

const imagesObserver = new IntersectionObserver(function(entries, imagesObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('change-image')
        }
    });
}, imagesObserverOptions);


spinningImages.forEach(image=> {
    imagesObserver.observe(image)
})