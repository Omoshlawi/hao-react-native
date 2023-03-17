import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../utils/colors";
const SelectableScrollableBadgeButton = ({
  data = [],
  contentContainerStyle,
  title,
  defaultItemIndex,
  keyExtractor,
  labelExtractor,
  onItemChange = (item) => {},
}) => {
  const [currentIndex, setCurentIndex] = useState(
    defaultItemIndex > -1 && defaultItemIndex < data.length
      ? defaultItemIndex
      : -1
  );

  useEffect(() => {
    if (currentIndex === -1) {
      onItemChange(null);
    } else {
      const item = data[currentIndex];
      onItemChange(item);
    }
  }, [currentIndex]);
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
              const index = data.indexOf(item);
              index === currentIndex
                ? setCurentIndex(-1)
                : setCurentIndex(index);
            }}
          >
            <View
              style={[
                styles.listItem,
                item === data[currentIndex]
                  ? { backgroundColor: colors.primary }
                  : {},
              ]}
            >
              <Text
                style={[
                  styles.title,
                  item === data[currentIndex] ? { color: colors.white } : {},
                ]}
              >
                {labelExtractor(item)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectableScrollableBadgeButton;

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
