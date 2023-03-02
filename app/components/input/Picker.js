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

/**
 *
 * @param {*displayExractor} param0 -> Used as display field for the currently selected item, replaces the placeholder
 * @returns
 */

function Picker({
  placeHolder,
  icon,
  layout = "linear",
  keyExtractor,
  data,
  children,
  defaultIndex,
  displayExractor,
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurentIndex] = useState(
    defaultIndex > -1 ? defaultIndex : -1
  );
  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
      <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={30} />}
        <Text style={styles.text}>
          {currentIndex === -1
            ? placeHolder
            : displayExractor(data[currentIndex])}
        </Text>
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
                    currentSelectedItem:
                      currentIndex === -1 ? null : data[currentIndex],
                    item: item,
                    setSelectedItem: (item) => {
                      setShowModal(false);
                      setCurentIndex(data.indexOf(item));
                    },
                  });
                }}
                keyExtractor={keyExtractor}
                data={data}
                ItemSeparatorComponent={ListItemSeparator}
              />
            ) : (
              <>
                <View style={styles.gridContainer}>
                  {data.map((item) => (
                    <View key={keyExtractor(item)}>
                      {children({
                        currentSelectedItem:
                          currentIndex === -1 ? null : data[currentIndex],
                        item: item,
                        setSelectedItem: (item) => {
                          setShowModal(false);
                          setCurentIndex(data.indexOf(item));
                        },
                      })}
                    </View>
                  ))}
                </View>
              </>
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

Picker.propTypes = {};

export default Picker;
