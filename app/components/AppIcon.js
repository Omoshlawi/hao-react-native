import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AppIcon = ({
  name,
  backgroundColor = "#fff",
  color = "#000",
  size = 40,
  scale = 0.5
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          width: size,
          height: size,
          borderRadius: size * scale,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} color={color} size={size * 0.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

AppIcon.propTypes = {};

export default AppIcon;
