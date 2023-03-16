import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import { useProperty } from "../../api/hooks";
import PropertyStatus from "./PropertyStatus";
import PropertyTypes from "./PropertyTypes";
import AppSearch from "../AppSearch";

const HouseSearch = () => {
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
    <>
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
      <PropertyStatus
        statuses={statuses}
        onItemClicked={hadleStatusItemClick}
      />
      <PropertyTypes types={types} onItemClicked={hadleTypeItemClick} />
      <ScrollView></ScrollView>
    </>
  );
};

export default HouseSearch;

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
});
