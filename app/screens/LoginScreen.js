import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import AppTextInput from "../components/AppTextInput";

function LoginScreen() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  return (
    <AppSafeAreaScreen>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/logo-red-captioned-1-bg.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AppTextInput
          placeholder="Username or Email"
          icon="account-circle-outline"
          autoCapitalize={false}
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress" //Only works on ios
          onChangeText={username => setFormState({...formState, username})}
          />
        <AppTextInput
          placeholder="Passsword"
          icon="lock-outline"
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password" //Only works on ios
          onChangeText={password => setFormState({...formState, password})}
        />
        <AppButton title="Login" onPress={()=>console.log(formState)}/>
      </View>
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    marginTop: 20,
    padding: 10
  },
});

export default LoginScreen;
