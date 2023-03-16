import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AppForm, AppFormField, AppFormSubmitButton } from "../../forms";
import { useProperty } from "../../../api/hooks";
import AppFormImagePicker from "../../forms/AppFormImagePicker";
import * as Yup from "yup";

const validationScheema = Yup.object().shape({
  title: Yup.string().required().label("PropertyTitle").min(6),
  price: Yup.number().required().label("PropertyPrice"),
  area: Yup.string().required().label("PropertySize"),
  description: Yup.string().required().label("PropertyDescription").min(20),
  image: Yup.string().required().label("PropertyDescription").min(20),
});

const initialDetails = {
  title: "",
  price: 0,
  area: "",
  description: "",
  image: "",
};

const Step1 = ({ currStep, onFinish }) => {
  if (currStep !== 1) return null;

  return (
    <View>
      <AppForm
        validationSchema={validationScheema}
        initialValues={initialDetails}
        onSubmit={onFinish}
      >
        <AppFormImagePicker name="image" />
        <AppFormField name="title" placeholder="Title" />
        <AppFormField name="price" placeholder="Price" />
        <AppFormField name="area" placeholder="Area" />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          rows={3}
        />
        <AppFormSubmitButton title="Next" />
      </AppForm>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({});
