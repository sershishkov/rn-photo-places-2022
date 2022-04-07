import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
// import {} from 'react-native';
import PlacesList from '../components/Places/PlacesList';

function AllPlacesScreen({ route }) {
  const [loadedPlaces, set__loadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      set__loadedPlaces((currentState) => [
        ...currentState,
        route.params.place,
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlacesScreen;
