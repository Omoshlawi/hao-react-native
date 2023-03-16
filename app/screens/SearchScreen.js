import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import { useProperty } from "../api/hooks";
import TabBar from "../components/tab/TabBar";
import HouseSearch from "../components/search/HouseSearch";
import PropertySearch from "../components/search/PropertySearch";

const SearchScreen = () => {
  const tabScreens = [<HouseSearch />, <PropertySearch />];
  const [currTab, setCurTab] = useState(0);
  return (
    <AppSafeAreaScreen style={styles.screen}>
      <Text style={styles.text}>{"Lets Find your desired residence"}</Text>
      <TabBar
        tabItems={[
          {
            title: "House",
            icon: <MaterialCommunityIcons name="home" size={20} />,
          },
          {
            title: "Properties",
            icon: <MaterialCommunityIcons name="account" size={20} />,
          },
        ]}
        onTabItemClicked={(item, index) => {
          setCurTab(index);
        }}
        activeIndex={0}
      />
      {tabScreens[currTab]}
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
