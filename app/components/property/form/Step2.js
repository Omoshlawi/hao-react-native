import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AppForm, AppFormField, AppFormPicker, AppFormSubmitButton } from "../../forms";
import { useProperty } from "../../../api/hooks";
import AppFormImagesPicker from "../../forms/AppFormImagesPicker";
import TypeItem from "../../search/TypeItem";
import colors from "../../../utils/colors";
import * as Yup from "yup";

const validationScheema = Yup.object().shape({
  type: Yup.string().required().label("PropertyType"),
  status: Yup.string().required().label("PropertyStatus"),
  images: Yup.array()
    .label("PropertyImages")
    .min(1, "Please select atleast one image"),
});

const initialDetails = {
  status: "",
  type: "",
  images: [],
};

const Step2 = ({ currStep, onFinish }) => {
  if (currStep !== 2) return null;
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
    <View>
      <AppForm
        validationScheema={validationScheema}
        onSubmit={onFinish}
        initialValues={initialDetails}
      >
        <AppFormImagesPicker name="images" />
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
        <AppFormSubmitButton title="Next"/>
      </AppForm>
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  statusPicker: {
    padding: 20,
  },
  typePicker: {
    padding: 20,
  },
});
