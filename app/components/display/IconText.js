import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconText = ({
  icon,
  text,
  color = colors.primary,
  size,
  fontWeight,
  left = true,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: left ? "row" : "row-reverse",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {icon && <MaterialCommunityIcons name={icon} size={size} color={color} />}
      {text && (
        <Text style={[styles.text, { fontSize: size, color, fontWeight }]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default IconText;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 2,
  },
});
