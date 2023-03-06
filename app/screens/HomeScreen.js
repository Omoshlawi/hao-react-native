import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";
import HouseCard from "../components/HouseCard";
import { FlatList } from "react-native-gesture-handler";
import { useHouses, useProperty } from "../api/hooks";
import routes from "../navigation/routes";

const HomeScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [properties, setProperties] = useState([]);
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(false);
  const { getProperties } = useProperty();
  const { getAllHouses } = useHouses();
  const [refresh, setRefresh] = useState(false);

  const loadProps = async () => {
    setRefresh(true);
    const propertiesResponse = await getProperties();
    const houseResponse = await getAllHouses();
    setRefresh(false);

    if (!propertiesResponse.ok || !houseResponse.ok) {
      return setError(true);
    }

    setProperties(propertiesResponse.data.results);
    setHouses(houseResponse.data.results);
    setError(false);
  };

  useEffect(() => {
    loadProps();
  }, []);

  return (
    <AppSafeAreaScreen style={styles.screen}>
      {/* <Text style={styles.title}>{"Lets Find you an \n Apartment"}</Text> */}
      <View style={styles.searchContainer}>
        <AppSearch
          style={styles.search}
          onTextChange={(text) => setSearchString(text)}
          value={searchString}
          onPress={() => {
            console.log("Seaching....", searchString);
          }}
        />
      </View>
      <View>
        <View style={styles.propHeader}>
          <Text style={[styles.headerText, { flex: 1 }]}>
            Available Properties
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.PROPERTY_LIST_PROP);
            }}
          >
            <Text style={[styles.headerText, { color: colors.primary }]}>
              View All {">"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={properties}
          horizontal
          keyExtractor={(property) => property.url}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <HouseCard
                image={{ uri: item.image }}
                title={item.title}
                subTitle={item.description ? item.description.slice(0, 53) : ""}
                price={item.price}
                onPress={() => {
                  navigation.navigate(routes.PROPERTY_DETAIL_PROP, item);
                }}
              />
            </View>
          )}
        />
      </View>
      <View>
        <View style={styles.propHeader}>
          <Text style={[styles.headerText, { flex: 1 }]}>Available Houses</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.PROPERTY_LIST_PROP);
            }}
          >
            <Text style={[styles.headerText, { color: colors.primary }]}>
              View All {">"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={houses}
          keyExtractor={(property) => property.url}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.houses}>
              <HouseCard
                image={{ uri: item.image }}
                // title={item.house_number}
                price={item.price}
                onPress={() => {
                  navigation.navigate(routes.PROPERTY_DETAIL_PROP, item);
                }}
              />
            </View>
          )}
        />
      </View>
    </AppSafeAreaScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: { fontWeight: "bold" },
  propHeader: {
    flexDirection: "row",
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: colors.primary,
    lineHeight: 30,
  },
  searchContainer: {
    paddingHorizontal: 10,
  },
  search: {
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.background,
  },
  list: {
    width: 250,
    height: 300,
    marginHorizontal: 5,
  },
  houses: {
    padding: 5,
    width: 207,
  },
});
