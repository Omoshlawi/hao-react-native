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

/**
 *
 * @param {*} param0
 * @returns
 */

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={5}
      style={styles.imageBackground}
      source={require("../assets/housebg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/logo-black-bg.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
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
    height: "100%",
    width: "100%",
  },
  logoContainer: {
    width: 300,
    height: 300,
    marginTop: 10,
    flex: 1,
  },
});

export default WelcomeScreen;
