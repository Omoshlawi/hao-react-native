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
    <View>
      <AppForm
        validationSchema={validationSchemer}
        initialValues={initialData}
        onSubmit={handleSubmit}
      >
        
      </AppForm>
    </View>
  );
};

export default UserProfileForm;

const styles = StyleSheet.create({});
