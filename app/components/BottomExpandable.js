import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomExpandable = ({
  expanded = false,
  onToggleExpand,
  children,
  contentContainStyle,
}) => {
  return (
    <View style={[styles.overlay, { height: expanded ? "60%" : "20%" }]}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => onToggleExpand(!expanded)}>
          <MaterialCommunityIcons
            name={expanded ? "chevron-down" : "chevron-up"}
            size={25}
            colors={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.children, contentContainStyle]}>{children}</View>
    </View>
  );
};

export default BottomExpandable;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.light,
    bottom: 0,
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  children: {
    padding: 10,
  },
  button: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row-reverse",
  },
});
