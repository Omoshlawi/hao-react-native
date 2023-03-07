import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { useProperty } from "../api/hooks";

import BottomExpandable from "../components/BottomExpandable";
import colors from "../utils/colors";

const PropertyLocationsScreen = () => {
  const [propertyLocations, setPropertyLocations] = useState([]);
  const [properties, setPropertes] = useState([]);
  const { getPropertyLocations, getProperties } = useProperty();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  // console.log(location);

  useEffect(() => {
    (async () => {
      const response = await getPropertyLocations();
      const propsResponse = await getProperties();
      if (!response.ok || !propsResponse.ok)
        return console.log("Error: Property Location Screen", response.problem);

      setPropertyLocations(response.data.results);
      setPropertes(propsResponse.data.results);
    })();
  }, []);

  return (
    <>
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
      <BottomExpandable
        expanded={expanded}
        onToggleExpand={(exp) => setExpanded(exp)}
      >
        <FlatList
          data={properties}
          horizontal
          style={{ height: "100%" }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ url }) => url}
          renderItem={({ item: { title, image } }) => (
            <View style={styles.listItem}>
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
              <Image
                source={{ uri: image }}
                style={{ height: 100, width: 100 }}
                resizeMode="contain"
              />
            </View>
          )}
        />
      </BottomExpandable>
    </>
  );
};

export default PropertyLocationsScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    width: 200,
    backgroundColor: colors.tabBackground,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
