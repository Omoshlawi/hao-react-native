import React, { useEffect, useState } from "react";
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

function PropertyEditingScreen(props) {
  const [currStep, setCurrStep] = useState(1);

  const handlestep1 = async (values) => {
    console.log(values);
    setCurrStep(currStep + 1);
  };
  const handlestep2 = async (values) => {
    console.log(values);
    setCurrStep(currStep + 1);
  };
  return (
    <AppSafeAreaScreen>
      <ScrollView>
        <View style={styles.formContainer}>
          <Step1 currStep={currStep} onFinish={handlestep1} />
          <Step2 currStep={currStep} onFinish={handlestep2} />
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
