const loadGoogleMapsApi = require('load-google-maps-api');

export default class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: 'AIzaSyAauxXF6x5dBCRvtlckiVs357kpSBEXM_4' });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 49.840, lng: 24.029 },
      zoom: 14
    });
  }
}