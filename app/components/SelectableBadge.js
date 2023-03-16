import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../utils/colors";

const SelectableBadge = ({
  data = [],
  onBadgeItemClicked,
  contentContainerStyle,
  title,
  currentActiveBadgeItemIndex,
  keyExtractor,
  badgeLabelExtractor,
}) => {
  const [currIndex, setCurrIndex] = useState(
    currentActiveBadgeItemIndex > -1 &&
      currentActiveBadgeItemIndex < data.length
      ? currentActiveBadgeItemIndex
      : -1
  );
  const [currItem, setCurItem] = useState(null);

  useEffect(() => {
    if (currIndex != -1) {
      setCurItem(data[currIndex]);
    }
  }, [currIndex]);

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onBadgeItemClicked(item);
              const index = data.indexOf(item);
              setCurrIndex(index);
            }}
          >
            <View
              style={[
                styles.listItem,
                item === currItem ? { backgroundColor: colors.primary } : {},
              ]}
            >
              <Text style={styles.title}>{badgeLabelExtractor(item)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectableBadge;

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
