import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import colors from "../../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemSeparator from "../ListItemSeparator";

function Picker({
  placeHolder,
  icon,
  layout = "linear",
  keyExtractor,
  data,
  children,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={30} />}
        <Text style={styles.text}>{placeHolder}</Text>
        <MaterialCommunityIcons
          name="chevron-down"
          color={colors.dark}
          size={30}
        />
        <Modal animationType="slide" visible={showModal}>
          <>
            {layout === "linear" ? (
              <FlatList
                renderItem={({ item, ...otherProps }) => {
                  return children({
                    setCurrntItem: () => {},
                    item: item,
                    onItemSelected: (item) => {
                      setShowModal(false);
                      // console.log(item);
                    },
                  });
                }}
                keyExtractor={keyExtractor}
                data={data}
                ItemSeparatorComponent={ListItemSeparator}
              />
            ) : (
              <></>
            )}
          </>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "left",
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

Picker.propTypes = {};

export default Picker;
