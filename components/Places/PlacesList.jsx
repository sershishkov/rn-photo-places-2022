import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import PlaceItem from './PlaceItem';

function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlacehandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          NO places added yet -start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlacehandler} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
