import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";
import {
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from "expo-image-picker";

function ImagePicker({ size = 100, onSelectedImageChange }) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size * 0.25 },
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

ImagePicker.propTypes = {
  onSelectedImageChange: PropTypes.func.isRequired,
};

export default ImagePicker;
