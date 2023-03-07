import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { useProperty } from "../api/hooks";

const PropertyLocationsScreen = () => {
  const [propertyLocations, setPropertyLocations] = useState([]);
  const { getPropertyLocations } = useProperty();
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    (async () => {
      const response = await getPropertyLocations();
      if (!response.ok) return console.log(response.problem);
      setPropertyLocations(response.data.results);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {propertyLocations.map(({ url, latitude, longitude }) => {
            if (!latitude || !longitude) return null;
            return (
              <Marker
                key={url}
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
              />
            );
          })}
        </MapView>
      )}
    </View>
  );
};

export default PropertyLocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
