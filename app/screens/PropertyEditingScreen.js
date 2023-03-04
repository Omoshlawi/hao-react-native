import React from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import Picker from "../components/input/Picker";
import colors from "../utils/colors";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";

const initialDetails = {
  title: "",
  price: 20,
  area: "",
  status: "",
  type: "",
  description: "",
  images: [],
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
  type: Yup.string().required().label("PropertyType"),
  status: Yup.string().required().label("PropertyStatus"),
  description: Yup.string().required().label("PropertyDescription").min(20),
  images: Yup.array().required().label("PropertyImages"),
  //   image: Yup.string().required().label("PropertyPrice"),
});

function PropertyEditingScreen(props) {
  return (
    <AppSafeAreaScreen>
      <ScrollView>
        <View style={styles.formContainer}>
          <AppForm
            initialValues={initialDetails}
            validationSchema={validationScheema}
            onSubmit={(values) => console.log(values)}
          >
            <AppFormImagePicker name="images" />
            <AppFormField name="title" placeholder="Title" />
            <AppFormPicker
              name="status"
              placeHolder="Property Status"
              // icon="apps"
              data={items}
              layout="grid"
              displayExractor={(item) => item.title}
              keyExtractor={(item) => item.url}
              defaultIndex={1}
              itemValueExtractor={(item) => item.url}
            >
              {({ item }) => {
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
            <AppFormPicker
              name="type"
              placeHolder="Property Type"
              // icon="apps"
              data={items}
              displayExractor={(item) => item.title}
              keyExtractor={(item) => item.url}
              defaultIndex={5}
              itemValueExtractor={(item) => item.url}
            >
              {({ item }) => {
                return (
                  <View
                    style={{
                      borderColor: "red",
                      borderWidth: 1,
                      borderRadius: 10,
                      backgroundColor: colors.light,
                      margin: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={{ fontSize: 30, textAlign: "center" }}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
            </AppFormPicker>
            <AppFormField
              name="price"
              placeholder="Price"
              keyboardType="numeric"
            />
            <AppFormField
              name="description"
              placeholder="Property Description"
              multiline
              rows={3}
            />
            <AppFormField name="area" placeholder="Area" />
            <AppFormSubmitButton title="Edit" />
          </AppForm>
        </View>
      </ScrollView>
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
