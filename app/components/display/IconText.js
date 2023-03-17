import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconText = ({ icon, text, color = colors.primary, size, fontWeight}) => {
  return (
    <View style={[styles.container]}>
      {icon && <MaterialCommunityIcons name={icon} size={size} color={color} />}
      {text && (
        <Text style={[styles.text, { fontSize: size, color, fontWeight }]}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    marginHorizontal: 2,
  },
});
