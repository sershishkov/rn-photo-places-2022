import { StyleSheet, ScrollView } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';

function AddPlaceScreen() {
  return (
    <ScrollView style={styles.root}>
      <PlaceForm />
    </ScrollView>
  );
}

export default AddPlaceScreen;
const styles = StyleSheet.create({});
