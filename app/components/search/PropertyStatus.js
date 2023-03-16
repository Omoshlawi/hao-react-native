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
import SelectableBadge from "../SelectableBadge";

const PropertyStatus = ({
  statuses = [],
  onItemClicked,
  contentContainerStyle,
  title = "Property Status",
}) => {
  return (
    <SelectableBadge
      data={statuses}
      onBadgeItemClicked={onItemClicked}
      contentContainerStyle={contentContainerStyle}
      title={title}
      badgeLabelExtractor={(status) => status.status}
      badgeValueExtractor={(status) => status.url}
      currentActiveBadgeItemIndex={0}
    />
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
