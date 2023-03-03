import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

AppText.propTypes = {};

export default AppText;
