import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import TypeItem from "./TypeItem";

import colors from "../../utils/colors";

const PropertyTypes = ({ types, onItemClicked }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Types</Text>
      <FlatList
        data={types}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(type) => type.url}
        renderItem={({ item: type }) => (
          <TypeItem
            style={styles.listItem}
            title={type.title}
            image={{ uri: type.image }}
            onPress={() => onItemClicked(type)}
          />
        )}
      />
    </View>
  );
};

export default PropertyTypes;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItem: {
    margin: 5,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
