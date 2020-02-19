let slide_index = 1;
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');

function nextSlide(n) {
  displaySlides(slide_index += n);
}

function displaySlides(n) {
  let slides = document.getElementsByClassName("showSlide");

  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

export {
  nextSlide,
  displaySlides,
  slide_index,
  leftArrow,
  rightArrow
}