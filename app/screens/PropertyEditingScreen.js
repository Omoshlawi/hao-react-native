import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppFormSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import colors from "../utils/colors";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import { useProperty } from "../api/hooks";
import AppIcon from "../components/AppIcon";
import TypeItem from "../components/search/TypeItem";

const initialDetails = {
  title: "",
  price: 20,
  area: "",
  status: "",
  type: "",
  description: "",
  images: [],
};

const validationScheema = Yup.object().shape({
  title: Yup.string().required().label("PropertyTitle").min(6),
  price: Yup.number().required().label("PropertyPrice"),
  area: Yup.string().required().label("PropertySize"),
  type: Yup.string().required().label("PropertyType"),
  status: Yup.string().required().label("PropertyStatus"),
  description: Yup.string().required().label("PropertyDescription").min(20),
  // Insted of using label that is used to set default error mesage you can supplier cumoe message beside the rull that is always violated
  // And for the images itthe min number of element is arr
  images: Yup.array()
    .label("PropertyImages")
    .min(1, "Please select atleast one image"),
});

function PropertyEditingScreen(props) {
  const items = [];
  const [types, setTypes] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const { getPropertyTypes, getPropertyStatus } = useProperty();

  useEffect(() => {
    (async () => {
      const statusResponse = await getPropertyStatus();
      const typesResponse = await getPropertyTypes();
      if (!typesResponse.ok || !statusResponse.ok)
        return console.log("Error: Search Screen", typesResponse.problem);
      setTypes(typesResponse.data.results);
      setStatuses(statusResponse.data.results);
    })();
  }, []);

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
              itemStyle={styles.statusPicker}
              // icon="apps"
              data={statuses}
              displayExractor={(item) => item.status}
              keyExtractor={(item) => item.url}
              // defaultIndex={1}
              itemValueExtractor={(item) => item.url}
            >
              {({ item: { status } }) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        textAlign: "center",
                      }}
                    >
                      {status}
                    </Text>
                  </View>
                );
              }}
            </AppFormPicker>
            <AppFormPicker
              itemStyle={styles.typePicker}
              name="type"
              placeHolder="Property Type"
              layout="grid"
              // icon="apps"
              data={types}
              displayExractor={(item) => item.title}
              keyExtractor={(item) => item.url}
              // defaultIndex={5}
              itemValueExtractor={(item) => item.url}
            >
              {({ item: { image, url, title } }) => {
                return (
                  <TypeItem
                    image={{ uri: image }}
                    title={title}
                    disable
                    style={{ backgroundColor: colors.light, padding: 15 }}
                  />
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
  statusPicker: {
    padding: 20,
  },
  typePicker: {
    padding: 20,
  },
});

PropertyEditingScreen.propTypes = {};

export default PropertyEditingScreen;
