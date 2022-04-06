import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Alert, Image, StyleSheet, Text, ScrollView } from 'react-native';

function MapScreen() {
  const [selectedLocation, set__selectedLocation] = useState();

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    // console.log(event.nativeEvent);
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    set__selectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title='Picked location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
