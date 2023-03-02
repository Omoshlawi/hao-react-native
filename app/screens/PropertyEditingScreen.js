import React from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import { View, StyleSheet } from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormSubmitButton,
} from "../components/forms";
import * as Yup from "yup";

const initialDetails = {
  title: "Prop1",
  price: 0,
  area: "20 by 20",
  status: "",
  type: "",
  //   image: "",
};

const items = [
  { title: "On Rent", url: "on-rent" },
  { title: "On Sale", url: "on-sale" },
  { title: "On Book", url: "on-book" },
];

const validationScheema = Yup.object().shape({
  title: Yup.string().required().label("PropertyTitle"),
  price: Yup.number().required().label("PropertyPrice"),
  area: Yup.string().required().label("PropertySize"),
  status: Yup.string().required().label("PropertyStatus"),
  type: Yup.number().required().label("PropertyType"),
  //   image: Yup.string().required().label("PropertyPrice"),
});

function PropertyEditingScreen(props) {
  return (
    <AppSafeAreaScreen>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={initialDetails}
          validationSchema={validationScheema}
          onSubmit={(values) => console.log(values)}
        >
          <AppFormField name="title" placeholder="Title" />
          <AppFormPicker
            name="type"
            placeholder="Property type"
            icon="apps"
            items={items}
            itemLabelExtractor={(item) => item.title}
            itemValueExtractor={(item) => item.url}
          />
          <AppFormPicker
            name="status"
            placeholder="Property status"
            icon="apps"
            items={items}
            itemLabelExtractor={(item) => item.title}
            itemValueExtractor={(item) => item.url}
          />
          <AppFormField name="price" placeholder="Price" />
          <AppFormField name="area" placeholder="Area" />
          <AppFormSubmitButton title="Edit" />
        </AppForm>
      </View>
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
});

PropertyEditingScreen.propTypes = {};

export default PropertyEditingScreen;
