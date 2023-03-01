import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function AppSafeAreaScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});

AppSafeAreaScreen.propTypes = {};

export default AppSafeAreaScreen;
