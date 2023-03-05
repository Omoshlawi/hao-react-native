import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";
import HouseCard from "../components/HouseCard";
import { FlatList } from "react-native-gesture-handler";
import { useProperty } from "../api/hooks";
import routes from "../navigation/routes";

const HomeScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);
  const { getProperties } = useProperty();
  const [refresh, setRefresh] = useState(false);

  const loadProps = async () => {
    setRefresh(true);
    const response = await getProperties();
    setRefresh(false);
    if (!response.ok) return setError(true);
    const { data } = response;
    setProperties(data.results);
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
          <Text style={{ flex: 1 }}>Available Properties</Text>
          <TouchableHighlight onPress={() => {}}>
            <Text>View All {">"} </Text>
          </TouchableHighlight>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={properties}
          horizontal
          keyExtractor={(property) => property.url}
          refreshing={refresh}
          onRefresh={loadProps}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <HouseCard
                image={{ uri: item.image }}
                title={item.title}
                subTitle={
                  "Are you seaching luxurious Hotel This is only for you"
                }
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
  },
  screen: {
    backgroundColor: colors.background,
  },
  list: {
    width: 250,
    height: 300,
    marginHorizontal: 5,
  },
});
