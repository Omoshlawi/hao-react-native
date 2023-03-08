import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

const TypeItem = ({ title, image, onPress, style, disable = false }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light}
      disabled={disable}
    >
      <View style={[styles.container, style]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default TypeItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 2,
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
    // backgroundColor: "red",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
