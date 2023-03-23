import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

function ViewImageScreen({ route, navigation }) {
  const { image } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {
          navigation.pop();
        }}
      >
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </TouchableOpacity>
      <Image style={styles.image} resizeMode="contain" source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    top: StatusBar.currentHeight,
    right: 30,
    position: "absolute",
    zIndex: 1,
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

export default ViewImageScreen;
