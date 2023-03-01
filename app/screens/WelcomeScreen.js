import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, StyleSheet, Button, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
        resizeMode="cover"
      style={styles.imageBackground}
      source={require("../assets/housebg.jpg")}
    >
        <Image style={styles.logo} resizeMode="contain" source={require('../assets/logoBlackbgless.png')}/>
    </ImageBackground>
  );
}

WelcomeScreen.propTypes = {};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {

  }
});

export default WelcomeScreen;
