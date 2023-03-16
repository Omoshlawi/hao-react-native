import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AppForm, AppFormField, AppFormSubmitButton } from "../../forms";
import * as Yup from "yup";

const validationScheema = Yup.object().shape({
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  zip_code: Yup.string().required().label("Zip Code"),
  country: Yup.string().required().label("Country"),
});

const initialDetails = {
  address: "",
  city: "",
  zip_code: "",
  country: "",
};

const Step3 = ({ currStep, onFinish }) => {
  if (currStep !== 3) return null;
  return (
    <View>
      <AppForm
        validationSchema={validationScheema}
        initialValues={initialDetails}
        onSubmit={onFinish}
      >
        <AppFormField name="address" placeholder="Address" />
        <AppFormField name="city" placeholder="City" />
        <AppFormField name="zip_code" placeholder="Zip Code" />
        <AppFormField name="country" placeholder="Country" />
        <AppFormSubmitButton title="Next" />
      </AppForm>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({});
