import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteIcon}>
        <MaterialCommunityIcons
          color="white"
          name="trash-can-outline"
          size={35}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/housebg.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    top: StatusBar.currentHeight,
    right: 30,
    position: "absolute",
  },
  deleteIcon: {
    top: StatusBar.currentHeight,
    left: 30,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
ViewImageScreen.propTypes = {};

export default ViewImageScreen;
