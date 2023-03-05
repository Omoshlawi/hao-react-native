import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";

const HomeScreen = () => {
    const [searchString, setSearchString] = useState('')
  return (
    <AppSafeAreaScreen style={styles.screen}>
      <Text style={styles.title}>{"Lets Find you an \n Apartment"}</Text>
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
    </AppSafeAreaScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
    fontWeight: "bold",
    color: colors.primary,
    lineHeight: 50
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
});
