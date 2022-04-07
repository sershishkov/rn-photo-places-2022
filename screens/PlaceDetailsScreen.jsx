import { useEffect } from 'react';

import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import OutlinedButton from '../components/ui/OutlinedButton';
import { Colors } from '../constants/colors';

function PlaceDetailsScreen({ route }) {
  function showOnMapHandler() {}

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {}, [selectedPlaceId]);

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDR</Text>
        </View>
        <OutlinedButton icon='map' onPress={showOnMapHandler}>
          View on MAP
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
  // screen: {
  //   alignItems: 'center',
  // },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
