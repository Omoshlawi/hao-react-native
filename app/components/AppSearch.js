import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppIcon from "./AppIcon";

const AppSearch = ({ style, onTextChange, value, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.text}
        placeholder="Search..."
        onChangeText={onTextChange}
        value={`${value}`}
      />
      <TouchableOpacity onPress={onPress}>
        <AppIcon
          name="magnify"
          scale={0.2}
          color={colors.white}
          backgroundColor={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    padding: 10,
  },
  text: {
    flex: 1,
  },
});
