import React from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import Picker from "../components/input/Picker";
import colors from "../utils/colors";

const initialDetails = {
  title: "",
  price: 0,
  area: "",
  status: "",
  // type: "",
  //   image: "",
};

const items = [
  { title: "On Rent", url: "on-rent" },
  { title: "On Sale", url: "on-sale" },
  { title: "On Book", url: "on-book" },
  { title: "On Chill", url: "on-chiil" },
  { title: "On Milk", url: "on-milk" },
  { title: "On Ugali", url: "on-ugali" },
];

const validationScheema = Yup.object().shape({
  title: Yup.string().required().label("PropertyTitle").min(6),
  price: Yup.number().required().label("PropertyPrice"),
  area: Yup.string().required().label("PropertySize"),
  status: Yup.string().required().label("PropertyStatus"),
  // type: Yup.number().required().label("PropertyType"),
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
            placeHolder="Property Status"
            icon="apps"
            data={items}
            layout="grid"
            displayExractor={(item) => item.title}
            keyExtractor={(item) => item.url}
            defaultIndex={5}
          >
            {({ item, setSelectedItem, currentSelectedItem }) => {
              return (
                <View
                  style={{
                    borderColor: "red",
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 80,
                    height: 80,
                    backgroundColor: colors.light,
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 30, textAlign: "center" }}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
          </AppFormPicker>
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
