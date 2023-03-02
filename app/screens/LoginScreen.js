import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";

function LoginScreen() {
  return (
    <AppSafeAreaScreen>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/logo-red-captioned-1-bg.png")}
        />
      </View>
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
