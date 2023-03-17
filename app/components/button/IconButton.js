import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

const IconButton = ({
  title,
  image,
  onPress,
  style,
  disable = false,
  active = false,
  activeBackgroundColor = colors.tabBackground,
  activeTintColor = colors.black,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light}
      disabled={disable}
    >
      <View
        style={[
          styles.container,
          style,
          active ? { backgroundColor: activeBackgroundColor } : {},
        ]}
      >
        <Image style={styles.image} source={image} resizeMode="contain" />
        <Text style={[styles.text, active ? { color: activeTintColor } : {}]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 2,
    overflow: "hidden",
    // backgroundColor: "red",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
