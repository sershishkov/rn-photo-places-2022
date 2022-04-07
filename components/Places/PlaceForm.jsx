import { useState, useCallback } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';

function PlaceForm() {
  const [enteredTitle, set__enteredTitle] = useState('');
  const [pickedLocation, set__pickedLocation] = useState();
  const [selectedImage, set__selectedImage] = useState();

  function changeTitleHandler(enteredText) {
    set__enteredTitle(enteredText);
  }

  function savePlaceHandler() {
    console.log(enteredTitle);
    console.log(pickedLocation);
    console.log(selectedImage);
  }

  function takeImageHandler(imageUri) {
    set__selectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    set__pickedLocation(location);
  }, []);

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}> The place form</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 10,
  },
});
