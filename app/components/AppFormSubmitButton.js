import React from "react";
import PropTypes from "prop-types";
import AppButton from "../components/AppButton";
import { useFormikContext } from "formik";

function AppFormSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

AppFormSubmitButton.propTypes = {};

export default AppFormSubmitButton;
