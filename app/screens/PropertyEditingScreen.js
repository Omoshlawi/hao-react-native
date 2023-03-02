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

// keyExtractor={(item) => item.url}
//             renderItem={({ item }) => (
//               <View>
//                 <Text style={{fontSize:30, textAlign: "center"}}>{item.title}</Text>
//               </View>
//             )}

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
          <Picker placeHolder="Types" icon="apps" data={items}>
            {({ item, onItemSelected }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onItemSelected(item);
                  }}
                  style={{ margin: 20 }}
                >
                  <View>
                    <Text style={{ fontSize: 30, textAlign: "center" }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          </Picker>
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
