class PlaceModel {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat: 0.0000, lng:127.121}
    this.id = new Date().toString() + Math.random().toString();
  }
}
