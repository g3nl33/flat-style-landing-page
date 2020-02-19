import Map from './map';
import { nextSlide, displaySlides, slide_index, leftArrow, rightArrow } from './slider';
import './styles/style.scss';

document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('contact-us__map-bg');
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});

displaySlides(slide_index);
leftArrow.addEventListener('click', () => nextSlide(-1));
rightArrow.addEventListener('click', () => nextSlide(1));