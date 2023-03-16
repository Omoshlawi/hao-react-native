import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../../components/AppSafeAreaScreen";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { useProperty } from "../../api/hooks";
import Step1 from "../../components/property/form/Step1";
import Step2 from "../../components/property/form/Step2";
import { AppForm, AppFormSubmitButton } from "../../components/forms";
import colors from "../../utils/colors";
import Step3 from "../../components/property/form/Step3";
import { getFormFileFromUri } from "../../utils/helpers";
import UserContext from "../../context/UserContext";

function PropertyEditingScreen(props) {
  const [currStep, setCurrStep] = useState(1);
  const [propDetails, setPropDetails] = useState({});
  const { token } = useContext(UserContext);
  const { postProperty } = useProperty();

  const handlestep1 = async (values) => {
    setPropDetails({ ...propDetails, ...values });
    setCurrStep(currStep + 1);
  };
  const handlestep2 = async (values) => {
    setPropDetails({ ...propDetails, ...values });
    setCurrStep(currStep + 1);
  };
  const handlestep3 = async (values) => {
    setPropDetails({ ...propDetails, ...values });
    const formData = new FormData();
    formData.append("title", propDetails.title);
    formData.append("description", propDetails.description);
    formData.append("type", propDetails.type);
    formData.append("status", propDetails.status);
    formData.append("price", propDetails.price);
    formData.append("area", propDetails.area);

    propDetails.images.forEach((uri) => {
      // console.log(getFormFileFromUri(uri));
      formData.append("images", { image: getFormFileFromUri(uri) });
    });

    formData.append("image", getFormFileFromUri(propDetails.image));

    formData.append("location.address", propDetails.address);
    formData.append("location.city", propDetails.city);
    formData.append("location.zip_code", propDetails.zip_code);
    formData.append("location.country", propDetails.country);
    // console.log(formData.getAll("image"));
    // console.log(formData.getAll("images"));
    // console.log(formData);
    const response = await postProperty(token, formData);
    console.log(response.problem);
    console.log(response);

    /*
    // setCurrStep(currStep + 1);
    // console.log(propDetails);
    const formData = new FormData();
    formData.append("title", propDetails.title);
    formData.append("description", propDetails.description);
    formData.append("type", propDetails.type);
    formData.append("status", propDetails.status);
    formData.append("price", propDetails.price);
    formData.append("area", propDetails.area);
    formData.append("images", propDetails.images)
    formData.append(
      "images",
      propDetails.images.map((uri) => ({
        image: getFormFileFromUri(uri),
      }))
    );
    // const imagesFormData = new FormData();
    // propDetails.images.forEach((uri) => {
    //   imagesFormData.append("image", getFormFileFromUri(uri));
    // });

    // formData.append("images", imagesFormData);

    formData.append("image", getFormFileFromUri(propDetails.image));
    formData.append("location.address", propDetails.address);
    formData.append("location.city", propDetails.city);
    formData.append("location.zip_code", propDetails.zip_code);
    formData.append("location.country", propDetails.country);
    const response = await postProperty(token, formData);
    console.log(response.data);
    // console.log(formData);
    */
  };
  return (
    <AppSafeAreaScreen>
      <ScrollView>
        <View style={styles.formContainer}>
          <Step1 currStep={currStep} onFinish={handlestep1} />
          <Step2 currStep={currStep} onFinish={handlestep2} />
          <Step3 currStep={currStep} onFinish={handlestep3} />
        </View>
      </ScrollView>
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 20,
  },
  btn: {
    padding: 10,
  },
});

PropertyEditingScreen.propTypes = {};

export default PropertyEditingScreen;
