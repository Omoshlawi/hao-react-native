import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../utils/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={5}
      style={styles.imageBackground}
      source={require("../assets/housebg.jpg")}
    >
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/logoBlackbgless.png")}
      />
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={()=>console.log("Taped")} />
        <AppButton title="Register" onPress={()=>console.log("Taped")} color="secondary"/>
      </View>
    </ImageBackground>
  );
}

WelcomeScreen.propTypes = {};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    top: 5,
  },
});

export default WelcomeScreen;
