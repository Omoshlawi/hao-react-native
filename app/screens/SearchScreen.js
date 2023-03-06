import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import AppSearch from "../components/AppSearch";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";

const SearchScreen = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <AppSafeAreaScreen>
      <Text style={styles.text}>
        {"Lets Find you a property that meets your needs"}
      </Text>
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
    lineHeight: 50
  },
  searchContainer: {
    paddingHorizontal: 10,
  },
  search: {
    borderRadius: 10,
  },
});
