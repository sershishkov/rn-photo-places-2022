export class PlaceModel {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat: 0.0000, lng:127.121}
    // this.id = new Date().toString() + Math.random().toString();
    this.id = id;
  }
}
