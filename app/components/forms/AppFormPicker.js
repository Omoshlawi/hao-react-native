import React, { useState } from "react";
import PropTypes from "prop-types";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import { zip } from "../../utils/helpers";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({
  placeholder,
  icon,
  name,
  selectedItem,
  items,
  itemLabelExtractor,
  itemValueExtractor,
}) {
  const { setFieldValue, errors } = useFormikContext();
  const labels = items.map(itemLabelExtractor);
  const values = items.map(itemValueExtractor);
  const data = zip(labels, values).map((el) => ({
    label: el[0],
    value: el[1],
  }));
  const [selected, setSelected] = useState(
    selected ? data.find((d) => d.label === selectedItem.title) : ""
  );
  return (
    <>
      <AppPicker
        placeHolder={placeholder}
        icon={icon}
        selectedItem={selected}
        onSelectItem={(item) => {
          setSelected(item);
          setFieldValue(name, item.value);
        }}
        items={data}
      />
      <AppErrorMessage error={errors[name]} />
    </>
  );
}

AppFormPicker.propTypes = {
  itemLabelExtractor: PropTypes.func.isRequired,
  itemValueExtractor: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default AppFormPicker;
