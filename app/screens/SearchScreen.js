import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import PropertyTypes from "../components/search/PropertyTypes";
import { useProperty } from "../api/hooks";
import PropertyStatus from "../components/search/PropertyStatus";

const SearchScreen = () => {
  const [searchString, setSearchString] = useState("");
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const { getPropertyTypes, getPropertyStatus } = useProperty();

  useEffect(() => {
    (async () => {
      const statusResponse = await getPropertyStatus();
      const typesResponse = await getPropertyTypes();
      if (!typesResponse.ok || !statusResponse.ok)
        return console.log("Error: Search Screen", typesResponse.problem);
      setTypes(typesResponse.data.results);
      setStatuses(statusResponse.data.results);
    })();
  }, []);

  const hadleTypeItemClick = (item) => console.log(item);
  const hadleStatusItemClick = (item) => console.log(item);

  return (
    <AppSafeAreaScreen style={styles.screen}>
      <Text style={styles.text}>{"Lets Find your desired residence"}</Text>
      <View style={styles.searchContainer}>
        <AppSearch
          placeholder="Search our database"
          style={styles.search}
          onTextChange={(text) => setSearchString(text)}
          value={searchString}
          onPress={() => {
            console.log("Seaching....", searchString);
          }}
        />
      </View>
      <PropertyStatus statuses={statuses} onItemClicked={hadleTypeItemClick} />
      <PropertyTypes types={types} onItemClicked={hadleTypeItemClick} />
      <ScrollView></ScrollView>
    </AppSafeAreaScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    padding: 20,
    lineHeight: 50,
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
});
