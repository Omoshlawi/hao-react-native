import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

const PropertyStatus = ({
  statuses = [],
  onItemClicked,
  contentContainerStyle,
}) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      <Text style={styles.title}>Property Status</Text>
      <FlatList
        data={statuses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(status) => status.url}
        renderItem={({ item: status }) => (
          <TouchableOpacity onPress={() => onItemClicked(status)}>
            <View style={styles.listItem}>
              <Text style={styles.title}>{status.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PropertyStatus;

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
