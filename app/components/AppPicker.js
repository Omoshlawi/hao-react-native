import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, placeHolder, items, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeHolder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="Close Button"
          onPress={() => {
            setModalVisible(false);
          }}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              value={item.value}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

AppPicker.propTypes = {};

export default AppPicker;
