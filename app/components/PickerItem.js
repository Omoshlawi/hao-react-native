import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ label, value, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

PickerItem.propTypes = {};

export default PickerItem;
