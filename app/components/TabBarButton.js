import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const TabBarButton = ({ name, size, color, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            borderRadius: size * 0.5,
            width: size,
            height: size,
          },
        ]}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name={name}
          size={size * 0.5}
          color={color}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    bottom: 15,
    alignItems: "center",
    borderWidth:10,
    borderColor: colors.tabBackground
  },
});
