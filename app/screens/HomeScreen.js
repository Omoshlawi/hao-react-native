import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import colors from "../utils/colors";
import HouseCard from "../components/HouseCard";
import { FlatList } from "react-native-gesture-handler";
import { useHouses, useProperty, useUser } from "../api/hooks";
import routes from "../navigation/routes";
import SmallHouseCard from "../components/house/SmallHouseCard";
import IconText from "../components/display/IconText";
import AppIcon from "../components/AppIcon";
import UserContext from "../context/UserContext";
import { Image } from "react-native";
import LargePropertCard from "../components/property/LargePropertCard";

const HomeScreen = ({ navigation }) => {
  const [properties, setProperties] = useState([]);
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(false);
  const { getProperties } = useProperty();
  const { getAllHouses } = useHouses();
  const [refresh, setRefresh] = useState(false);

  const { user } = useContext(UserContext);
  const { getUser } = useUser();

  const loadProps = async () => {
    if (!user) {
      await getUser();
    }

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
      <View style={styles.searchContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SEARCH_MAIN)}
        >
          <AppIcon
            name="magnify"
            scale={0.25}
            backgroundColor={colors.primary}
            color={colors.white}
          />
        </TouchableOpacity>
        <View>
          {user && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.USER_CENTER_MAIN, {
                  user,
                  // screen: routes.USER_PROFILE_EDIT_ACCOUNT,
                })
              }
            >
              {user.profile.image ? (
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={{ uri: user.profile.image }}
                />
              ) : (
                <AppIcon name="account" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        <View style={styles.header}>
          <IconText text="Properties" fontWeight="bold" color={colors.black} />
          <IconText
            left={false}
            text="View all"
            icon="chevron-right"
            onPress={() => navigation.navigate(routes.PROPERTY_NAV)}
          />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={properties}
          horizontal
          keyExtractor={(property) => property.url}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <LargePropertCard item={item} />
            </View>
          )}
        />
      </View>
      <View style={styles.header}>
        <IconText text="Houses" fontWeight="bold" color={colors.black} />
        <IconText
          left={false}
          text="View all"
          icon="chevron-right"
          onPress={() => {
            navigation.navigate(routes.HOUSES_NAV);
          }}
        />
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={houses}
        keyExtractor={(property) => property.url}
        numColumns={2}
        renderItem={({ item }) => <SmallHouseCard item={item} />}
      />
    </AppSafeAreaScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: { fontWeight: "bold" },
  header: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
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
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.background,
  },
  list: {
    width: 350,
    height: 300,
    marginHorizontal: 5,
  },
  houses: {
    padding: 5,
    width: 207,
  },
});
