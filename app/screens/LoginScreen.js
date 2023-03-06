import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";
import { useUser } from "../api/hooks";
import UserContext from "../context/UserContext";

const validationScheema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const { login } = useUser();
  const { setToken, setUser } = useContext(UserContext);

  const handleLogin = async (data) => {
    const result = await login(data);
    if (!result.ok) return;

    // console.log(result.data);
    setToken(result.data.token);
    delete result.data.token;
    setUser(result.data);
  };
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
        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationScheema}
        >
          <AppFormField
            name="username"
            placeholder="Username or Email"
            icon="account-circle-outline"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress" //Only works on ios
          />
          <AppFormField
            name="password"
            placeholder="Passsword"
            icon="lock-outline"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password" //Only works on ios
          />
          <AppFormSubmitButton title="Login" />
        </AppForm>
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
    padding: 10,
  },
});

export default LoginScreen;
