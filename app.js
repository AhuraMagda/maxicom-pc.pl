// flip the card on click

const cards = document.querySelectorAll(".offer__card");

const flipTheCard = (card) => {
  card.classList.toggle("flipTheCard");
};

cards.forEach((card) =>
  card.addEventListener("click", function () {
    flipTheCard(card);
  })
);
cards.forEach((card) =>
  card.addEventListener("touchstart", function (event) {
    event.preventDefault();
    flipTheCard(card);
  })
);

// icons have 2 classes to make a "shine effect"
const cardsBox = document.querySelector(".offer__cards-container");
const firstImages = document.querySelectorAll(".first-fading");
const secondImages = document.querySelectorAll(".second-fading");

const imagesObserverOptions = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

const imagesObserver = new IntersectionObserver(function (
  entries,
  imagesObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let delay = 1000;
      firstImages.forEach((image) => {
        setTimeout(() => {
          image.classList.add("change-image");
        }, delay);
        delay += 300;
      });
      let delay2 = 2100;
      secondImages.forEach((image) => {
        setTimeout(() => {
          image.classList.add("change-image");
        }, delay2);
        delay2 += 300;
      });
      flipTheCard(cards[0]);
      setTimeout(() => {
        flipTheCard(cards[0]);
      }, 1000);
    } else {
      firstImages.forEach((image) => image.classList.remove("change-image"));
      secondImages.forEach((image) => image.classList.remove("change-image"));
    }
  });
},
imagesObserverOptions);

imagesObserver.observe(cardsBox);

// add copyright

document.querySelector(
  "#footer__date"
).innerText = `Copyright © ${new Date().getFullYear()} Maxicom-PC`;
