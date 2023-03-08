import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import colors from "../utils/colors";
import { useUser } from "../api/hooks";
import UserContext from "../context/UserContext";

const validationSchemer = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  first_name: Yup.string().label("First Name"),
  last_name: Yup.string().label("Last Name"),
  password: Yup.string().min(8).label("Password").required(),
  confirm_password: Yup.string().min(8).label("Confirm Password").required(),
});

const RegisterScreen = ({ navigation }) => {
  const { register } = useUser();
  const { setToken, setUser } = useContext(UserContext);

  const handleRegister = async (values, { setFieldError }) => {
    if (values.password === values.confirm_password) {
      const response = await register(values);
      if (!response.ok) {
        if (response.problem == "CLIENT_ERROR") {
          for (const key in response.data) {
            setFieldError(key, response.data[key].join(";"));
          }
        } else {
          console.log("Error: RegisterScreen", response.data);
        }
        return;
      }
      setToken(response.data.token);
      delete response.data.token;
      setUser(response.data);
    } else {
      setFieldError("confirm_password", "Provided passwords must match");
      console.log("Provided passwords must match");
    }
  };
  return (
    <ScrollView>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../assets/logo-red-captioned-1-bg.png")}
        />
      </View>
      <View style={styles.formContainer}>
        <AppForm
          validationSchema={validationSchemer}
          initialValues={{
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={handleRegister}
        >
          <AppFormField
            name="username"
            placeholder="Username"
            icon="account-circle-outline"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFormField
            name="email"
            placeholder="Email"
            icon="email-outline"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress" //Only works on ios
          />
          <AppFormField
            name="first_name"
            placeholder="First name"
            icon="account-edit-outline"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFormField
            name="last_name"
            placeholder="Last name"
            icon="account-edit-outline"
            autoCapitalize="none"
            autoCorrect={false}
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
          <AppFormField
            name="confirm_password"
            placeholder="Passsword"
            icon="lock-outline"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password" //Only works on ios
          />
          <AppFormSubmitButton title="Submit" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
