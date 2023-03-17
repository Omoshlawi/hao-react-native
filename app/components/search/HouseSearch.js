import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import colors from "../../utils/colors";
import { useHouses, useProperty } from "../../api/hooks";
import AppSearch from "../AppSearch";
import ScrollableIconButtons from "../button/ScrollableIconButtons";
import ScrollableBadgeButtons from "../button/ScrollableBagdeButtons";
import SmallHouseCard from "../house/SmallHouseCard";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import AppIcon from "../AppIcon";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import AppCheckBox from "../input/AppCheckBox";

const HouseSearch = () => {
  const [search, setSearch] = useState({});
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const { getHousTypes, getHouseStatus, filterHouses } = useHouses();
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: false,
    type: false,
    price: false,
  });

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
        <Menu
          visible={visible}
          onRequestClose={() => setVisible(false)}
          anchor={
            <TouchableOpacity onPress={() => setVisible(true)}>
              <AppIcon
                name="filter-menu-outline"
                scale={0.25}
                size={50}
                backgroundColor={colors.black}
                color={colors.white}
              />
            </TouchableOpacity>
          }
        >
          <MenuItem disabled={true}>
            <AppCheckBox
              text="Status Filter"
              value={activeFilters.status}
              onValueChange={(status) =>
                setActiveFilters({ ...activeFilters, status })
              }
            />
          </MenuItem>
          <MenuItem disabled={true}>
            <AppCheckBox
              text="Type Filter"
              value={activeFilters.type}
              onValueChange={(type) =>
                setActiveFilters({ ...activeFilters, type })
              }
            />
          </MenuItem>
          <MenuItem disabled={true}>
            <AppCheckBox
              text="Price Filter"
              value={activeFilters.price}
              onValueChange={(price) => {
                if (!price) {
                  const s = { ...search };
                  delete s.price_min;
                  delete s.price_max;
                  setSearch(s);
                }
                setActiveFilters({ ...activeFilters, price });
              }}
            />
          </MenuItem>
        </Menu>
      </View>
      {statuses.length > 0 && activeFilters.status && (
        <ScrollableBadgeButtons
          data={statuses}
          onItemChange={handleStatusChange}
          keyExtractor={(status) => status.url}
          title="House Status"
          labelExtractor={(status) => status.status}
        />
      )}
      {types.length > 0 && activeFilters.type && (
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
      {activeFilters.price && (
        <>
          <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
            House Prices
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text>Min</Text>
            <MultiSlider
              max={40000}
              min={0}
              values={[4000, 30000]}
              // onValuesChange={(values) => console.log(values)}
              step={100}
              enableLabel={true}
              containerStyle={{ paddingHorizontal: 10 }}
              onValuesChangeFinish={([price_min, price_max]) => {
                setSearch({ ...search, price_min, price_max });
              }}
            />
            <Text>Max</Text>
          </View>
        </>
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
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    marginRight: 10,
  },
});
