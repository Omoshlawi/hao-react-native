import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import TypeItem from "./TypeItem";

import colors from "../../utils/colors";
import ScrollableIconButtons from "../button/ScrollableIconButtons";

const PropertyTypes = ({
  types = [],
  onItemClicked,
  contentContainerStyle,
  title = "Property Types",
}) => {
  return (
    <ScrollableIconButtons
      data={types}
      contentContainerStyle={contentContainerStyle}
      title={title}
      onItemClicked={onItemClicked}
    />
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
