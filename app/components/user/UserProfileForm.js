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
import {
  getFormFileFromMediaFile,
  getFormFileFromUri,
} from "../../utils/helpers";

const validationSchemer = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  first_name: Yup.string().label("First Name"),
  last_name: Yup.string().label("Last Name"),
  image: Yup.string().label("Image").required(),
  gender: Yup.string().label("Gender").required(),
  phone_number: Yup.string().label("Phone number").required(),
});

const UserProfileForm = ({ initial, goBack }) => {
  const { setToken, setUser } = useContext(UserContext);
  const { putUser } = useUser();

  const handleSubmit = async (values, { setFieldError }) => {
    const { image, first_name, last_name, gender, email, phone_number } =
      values;
    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("profile.gender", gender);
    formData.append("profile.phone_number", phone_number);
    formData.append("profile.image", getFormFileFromUri(image));
    const resp = await putUser(formData);
    if (!resp.ok) {
      if (resp.problem === "CLIENT_ERROR") {
        for (const key in resp.data) {
          const element = resp.data[key];
          if (element instanceof Array) {
            setFieldError(key, element.join(";"));
          } else if (element instanceof Object) {
            for (const key1 in element) {
              const element1 = element[key1];
              setFieldError(key1, element1.join(";"));
            }
          }
        }
        return;
      }
      return console.log(resp.problem);
    }
    setUser(resp.data);
  };

  return (
    <View style={styles.container}>
      <AppForm
        validationSchema={validationSchemer}
        initialValues={initial}
        onSubmit={handleSubmit}
      >
        <View style={styles.image}>
          <AppFormImagePicker name="image" />
        </View>
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
  image: {
    alignItems: "center",
  },
});
