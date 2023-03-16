import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { TouchableOpacity } from "react-native";

const tabs = ["Houses", "property"];

const HousePropertyTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabItem}>
        <TouchableOpacity>
          <Text style={styles.text}>Properties</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabItem}>
        <TouchableOpacity>
          <Text style={styles.text}>Houses</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HousePropertyTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 25,
  },
  tabItem: {
    flex: 1,
    backgroundColor: colors.tabBackground,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
