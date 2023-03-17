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
  keyExtractor,
  selectable = false,
  defaultItemIndex,
}) => {
  const [currentIndex, setCurentIndex] = useState(
    defaultItemIndex > -1 && defaultItemIndex < data.length
      ? defaultItemIndex
      : -1
  );
  useEffect(() => {
    if (currentIndex === -1) {
      onItemClicked(null);
    } else {
      const item = data[currentIndex];
      onItemClicked(item);
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
        renderItem={({ item: type }) => (
          <IconButton
            style={styles.listItem}
            title={titleExtractor(type)}
            image={{ uri: imageExtractor(type) }}
            onPress={() => {
              const index = data.indexOf(type);
              index === currentIndex && selectable
                ? setCurentIndex(-1)
                : setCurentIndex(index);
            }}
            active={type === data[currentIndex] && selectable}
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
