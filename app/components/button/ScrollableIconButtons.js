import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
import IconButton from "./IconButton";

const ScrollableIconButtons = ({
  data = [],
  onItemClicked,
  contentContainerStyle,
  title,
  titleExtractor,
  imageExtractor,
  keyExtractor
}) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item: type }) => (
          <IconButton
            style={styles.listItem}
            title={titleExtractor(type)}
            image={{ uri: imageExtractor(type) }}
            onPress={() => onItemClicked(type)}
          />
        )}
      />
    </View>
  );
};

export default ScrollableIconButtons;

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
