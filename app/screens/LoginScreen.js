import { Formik } from "formik";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import AppTextInput from "../components/AppTextInput";
import * as Yup from "yup";
import AppText from "../components/AppText";
import AppErrorMessage from "../components/AppErrorMessage";
import AppFormField from "../components/AppFormField";

const validationScheema = Yup.object().shape({
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

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
      <View style={styles.formContainer}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationScheema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
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
              <AppButton title="Login" onPress={handleSubmit} />
            </>
          )}
        </Formik>
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
  errors: {
    color: "red",
  },
});

export default LoginScreen;
