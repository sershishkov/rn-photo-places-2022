import { StyleSheet, ScrollView } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';

function AddPlaceScreen({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate('AllPlaces', {
      place: place,
    });
  }
  return (
    <ScrollView style={styles.root}>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </ScrollView>
  );
}

export default AddPlaceScreen;
const styles = StyleSheet.create({});
