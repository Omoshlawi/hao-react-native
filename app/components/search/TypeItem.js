import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

const TypeItem = ({ title, image, onPress, style }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={[styles.container, style]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default TypeItem;

const styles = StyleSheet.create({
  container: {},
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
