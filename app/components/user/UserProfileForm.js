import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  AppForm,
  AppFormField,
  AppFormSubmitButton,
} from "../../components/forms";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import colors from "../../utils/colors";
import { useUser } from "../../api/hooks";
import UserContext from "../../context/UserContext";
import AppFormImagePicker from "../forms/AppFormImagePicker";
import AppTextInput from "../AppTextInput";

const validationSchemer = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  first_name: Yup.string().label("First Name"),
  last_name: Yup.string().label("Last Name"),
  image: Yup.string().label("Image").required(),
  gender: Yup.string().label("Gender").required(),
  phone_number: Yup.string().label("Phone number").required(),
});

const UserProfileForm = () => {
  const { setToken, setUser } = useContext(UserContext);
  const [initialData, setInitialData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    image: "",
    gender: "",
    phone_number: "",
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <AppForm
        validationSchema={validationSchemer}
        initialValues={initialData}
        onSubmit={handleSubmit}
      >
        <View style={styles.image}>
          <AppFormImagePicker name="image" />
        </View>
        <AppFormField name="username" placeholder="Username" />
        <AppFormField name="first_name" placeholder="First name" />
        <AppFormField name="last_name" placeholder="Last name" />
        <AppFormField name="email" placeholder="Email" />
        <AppFormField name="gender" placeholder="Gender" />
        <AppFormField name="phone_number" placeholder="Phone number" />
        <AppFormSubmitButton title="Update" />
      </AppForm>
    </View>
  );
};

export default UserProfileForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image:{
    alignItems: "center"
  }
});
