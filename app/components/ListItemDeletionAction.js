import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

function ListItemDeletionAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.touchable}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          color="white"
          name="trash-can-outline"
          size={50}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  touchable: {},
  container: {
    backgroundColor: colors.danger,
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },
});


export default ListItemDeletionAction;
