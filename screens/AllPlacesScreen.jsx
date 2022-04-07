import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

function AllPlacesScreen({ route }) {
  const [loadedPlaces, set__loadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      set__loadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();

      // set__loadedPlaces((currentState) => [
      //   ...currentState,
      //   route.params.place,
      // ]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlacesScreen;
