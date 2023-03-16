import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";

const ScrollableBadgeButtons = ({
  data = [],
  onBadgeItemClicked,
  contentContainerStyle,
  title,
  keyExtractor,
  badgeLabelExtractor,
}) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onBadgeItemClicked(item)}>
            <View style={styles.listItem}>
              <Text style={styles.title}>{badgeLabelExtractor(item)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ScrollableBadgeButtons;

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
