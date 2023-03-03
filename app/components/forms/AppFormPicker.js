import React, { useState } from "react";
import PropTypes from "prop-types";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import { zip } from "../../utils/helpers";
import AppErrorMessage from "./AppErrorMessage";
import Picker from "../input/Picker";

function AppFormPicker({
  placeHolder,
  icon,
  layout = "linear",
  keyExtractor,
  data,
  children,
  defaultIndex,
  displayExractor,
  name,
}) {
  const { setFieldValue, errors } = useFormikContext();
  return (
    <>
      <Picker
        placeHolder={placeHolder}
        icon={icon}
        data={data}
        layout={layout}
        displayExractor={displayExractor}
        keyExtractor={keyExtractor}
        defaultIndex={defaultIndex}
        onSelectedItemChange={(item)=>{console.log(item);}} //called and passed the item whwnever a new item is selected, gives you acces to inside
      >
        {/* child whick is a function with parametered is fed to the picker and 
        internally it calls it and passes it item by item */}
        {children}
      </Picker>
      <AppErrorMessage error={errors[name]} />
    </>
  );
}

AppFormPicker.propTypes = {};

export default AppFormPicker;
