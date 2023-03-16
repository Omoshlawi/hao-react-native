import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import { useHouses, useProperty } from "../../api/hooks";
import AppSearch from "../AppSearch";
import ScrollableIconButtons from "../button/ScrollableIconButtons";
import SelectableBadge from "../SelectableBadge";

const HouseSearch = () => {
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const { getHousTypes, getHouseStatus, filterHouses } = useHouses();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    (async () => {
      const statusResponse = await getHouseStatus();
      const typesResponse = await getHousTypes();
      if (!typesResponse.ok || !statusResponse.ok)
        return console.log("Error: Search Screen", typesResponse.problem);
      setTypes(typesResponse.data.results);
      setStatuses(statusResponse.data.results);
    })();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

  const hadleTypeItemClick = (item) => console.log(item);
  const hadleStatusItemClick = (item) => console.log(item);
  const handleSearch = async () => {
    const response = await filterHouses({ search });
    if (!response.ok) {
      return console.log(response.problem);
    }
    const {
      data: { results },
    } = response;
    setSearchResults(results);
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <AppSearch
          placeholder="Search our database"
          style={styles.search}
          onTextChange={(text) => setSearch(text)}
          value={search}
          onPress={() => {
            console.log("Seaching....", search);
          }}
        />
      </View>
      <SelectableBadge
        data={statuses}
        onBadgeItemClicked={hadleStatusItemClick}
        keyExtractor={(status) => status.url}
        title="House Status"
        badgeLabelExtractor={(status) => status.status}
      />
      <ScrollableIconButtons
        title="House Types"
        data={types}
        onItemClicked={hadleTypeItemClick}
        titleExtractor={(item) => item.type}
        imageExtractor={(item) => item.image}
        keyExtractor={(type) => type.url}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.house_number}</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: item.image }}
            />
          </View>
        )}
      />
    </>
  );
};

export default HouseSearch;

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
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
