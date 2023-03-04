import React, { useEffect, useState } from "react";
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
import {
  useForegroundPermissions,
  getLastKnownPositionAsync,
  getCurrentPositionAsync,
} from "expo-location";

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
  // Insted of using label that is used to set default error mesage you can supplier cumoe message beside the rull that is always violated
  // And for the images itthe min number of element is arr
  images: Yup.array()
    .label("PropertyImages")
    .min(1, "Please select atleast one image"),
});

function PropertyEditingScreen(props) {
  const [status, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState();
  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (!granted) {
        alert(
          "Your need to grant app location permision to store your location info and allow client locate you"
        );
      } else {
        // Very accurate bt takes some time to retrieve the
        const {
          coords: { latitude, longitude },
        } = await getCurrentPositionAsync();
        setLocation({ latitude, longitude });
        // you could use altternative which is first but not much accurate since it uses the last know as name suggenst
        // const {coords: { latitude, longitude }} = await getLastKnownPositionAsync();
        // console.log(result);
      }
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
