import { StyleSheet, ScrollView } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

function AddPlaceScreen({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  }

  return (
    <ScrollView style={styles.root}>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </ScrollView>
  );
}

export default AddPlaceScreen;
const styles = StyleSheet.create({});
