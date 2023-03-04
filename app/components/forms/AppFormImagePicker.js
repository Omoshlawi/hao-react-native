import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../input/ImageInputList";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

const AppFormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <ImageInputList
        //   Onvert uri to local state objet with property uri
        localImagesList={values[name].map((uri) => ({ uri }))}
        // extract uri from localImage obj
        onImagesListChange={({ uri }) => setFieldValue(name, uri)}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;

const styles = StyleSheet.create({});
