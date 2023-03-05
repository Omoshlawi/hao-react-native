import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const SearchScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.text} placeholder="Search..." />
        <MaterialCommunityIcons name="magnify" size={30}/>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 10,
    margin:10,
    borderRadius: 25
  },
  text: {
    flex: 1,
  },
});
