import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../utils/colors";

/**
 * @dependancies : npm install react-native-gesture-handler
 * @param {*} param0
 * @returns
 */

function LeftAction() {
  return (
    <View
      style={{ backgroundColor: "green", flex: 1, justifyContent: "center" }}
    >
      <Text style={{ color: "red", paddingHorizontal: 10 }}>Left Action</Text>
    </View>
  );
}

function RightAction() {
  return (
    <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center" }}>
      <Text style={{ color: "white", paddingHorizontal: 10 }}>
        Right Action
      </Text>
    </View>
  );
}

function ListItemSwipable({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions || RightAction}
      renderLeftActions={renderLeftActions || LeftAction}
    >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItemSwipable;
