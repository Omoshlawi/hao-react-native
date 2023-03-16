import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../../hooks/useLocation";
import { useProperty } from "../../api/hooks";

import BottomExpandable from "../../components/BottomExpandable";
import colors from "../../utils/colors";
import AppSearch from "../../components/AppSearch";
import SelectableBadge from "../../components/SelectableBadge";
import ScrollableIconButtons from "../../components/button/ScrollableIconButtons";

const PropertyLocationsScreen = () => {
  const [propertyLocations, setPropertyLocations] = useState([]);
  const [propertiesType, setPropertiesType] = useState([]);
  const [propertiesStatus, setPropertiesStatus] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const { getPropertyLocations, getPropertyTypes, getPropertyStatus } =
    useProperty();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  // console.log(location);

  useEffect(() => {
    (async () => {
      const locationResponse = await getPropertyLocations();
      const propsResponse = await getPropertyTypes();
      const statusResponse = await getPropertyStatus();
      if (!locationResponse.ok || !propsResponse.ok || !statusResponse.ok)
        return console.log(
          "Error: Property Location Screen",
          locationResponse.problem,
          statusResponse.problem,
          propsResponse.problem
        );

      setPropertyLocations(locationResponse.data.results);
      setPropertiesType(propsResponse.data.results);
      setPropertiesStatus(statusResponse.data.results);
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
        {expanded && (
          <>
            <View style={styles.searchContainer}>
              <AppSearch
                placeholder="Search our database"
                style={styles.search}
                onTextChange={(text) => setKeyWord(text)}
                value={keyWord}
                onPress={() => {
                  console.log("Seaching....", searchString);
                }}
              />
            </View>
            <SelectableBadge
              data={propertiesStatus}
              onBadgeItemClicked={(status) => console.log(status)}
              keyExtractor={(status) => status.url}
              title="Property Status"
              badgeLabelExtractor={(status) => status.status}
            />
          </>
        )}
        <ScrollableIconButtons
          title="Property Types"
          data={propertiesType}
          onItemClicked={(type) => console.log(type)}
          titleExtractor={(item) => item.title}
          imageExtractor={(item) => item.image}
          keyExtractor={(type) => type.url}
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
  searchContainer: {
    paddingHorizontal: 10,
  },
  search: {
    borderRadius: 10,
    backgroundColor: colors.tabBackground,
  },
  screen: {
    backgroundColor: colors.background,
  },
});
