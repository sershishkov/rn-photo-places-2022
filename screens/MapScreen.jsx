import MapView, { Marker } from 'react-native-maps';
import { View, Alert, Image, StyleSheet, Text, ScrollView } from 'react-native';

function MapScreen() {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView initialRegion={region} style={styles.map}></MapView>;
}

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
