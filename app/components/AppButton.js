import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

function AppButton({ title, onPress, color='primary' }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent:"center",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical:10
  },
  buttonText:{
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

export default AppButton;
