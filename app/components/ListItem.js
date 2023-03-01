import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import colors from "../utils/colors";

function ListItem({ image, title, subTitle, onPress, style, ImageComponent }) {
  return (
    <TouchableHighlight
      style={style}
      onPress={onPress}
      underlayColor={colors.light} /**Changes color of highlight */
    >
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.containerDetails}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {};

const styles = StyleSheet.create({
  containerDetails: {
     marginLeft: 10,
     justifyContent:"center"
  },
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: 600,
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
