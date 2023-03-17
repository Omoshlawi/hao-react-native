import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import { useHouses, useProperty } from "../../api/hooks";
import AppSearch from "../AppSearch";
import ScrollableIconButtons from "../button/ScrollableIconButtons";
import SelectableBadge from "../SelectableBadge";
import routes from "../../navigation/routes";
import ScrollableBadgeButtons from "../button/ScrollableBagdeButtons";
import IconText from "../display/IconText";
import HouseCard from "../HouseCard";
import SmallHouseCard from "../house/SmallHouseCard";

const HouseSearch = () => {
  const [search, setSearch] = useState({});
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

  const hadleTypeItemClick = (item) => {
    if (item) {
      setSearch({ ...search, type: item.type });
    } else {
      const _search = { ...search };
      delete _search.type;
      setSearch(_search);
    }
  };
  const handleStatusChange = (item) => {
    if (item) {
      setSearch({ ...search, status: item.status });
    } else {
      const _search = { ...search };
      delete _search.status;
      setSearch(_search);
    }
  };
  const handleSearch = async () => {
    const response = await filterHouses(search);
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
          onTextChange={(text) => setSearch({ ...search, search: text })}
          value={search.search}
          onPress={handleSearch}
        />
      </View>
      {statuses.length > 0 && (
        <ScrollableBadgeButtons
          data={statuses}
          onItemChange={handleStatusChange}
          keyExtractor={(status) => status.url}
          title="House Status"
          labelExtractor={(status) => status.status}
        />
      )}
      {types.length > 0 && (
        <ScrollableIconButtons
          title="House Types"
          data={types}
          onItemClicked={hadleTypeItemClick}
          titleExtractor={(item) => item.type}
          imageExtractor={(item) => item.image}
          keyExtractor={(type) => type.url}
          selectable
        />
      )}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.url}
        numColumns={2}
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item }) => <SmallHouseCard item={item} />}
      />
    </>
  );
};

export default HouseSearch;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColorL: colors.primary,
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
