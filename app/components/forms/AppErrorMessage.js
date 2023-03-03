import React from "react";
import PropTypes from "prop-types";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

AppErrorMessage.propTypes = {

};

export default AppErrorMessage;
