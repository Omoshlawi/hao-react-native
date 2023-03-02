import React from "react";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import { FlatList } from "react-native";
import ListItemSwepableDeleteAction from "../components/ListItemSwepableDeleteAction";
import ListItemSwipable from "../components/ListItemSwipable";

const nortifications = [
  { id: 1, message: "N1" },
  { id: 2, message: "N2" },
  { id: 3, message: "N3" },
  { id: 4, message: "N4" },
];

function NortificationScreen(props) {
  return (
    <AppSafeAreaScreen>
      <FlatList
        data={nortifications}
        keyExtractor={(nortification) => nortification.id}
        renderItem={({ item }) => (
          <ListItemSwipable title={item.message} onPress={() => {}} />
        )}
        // <ListItemSwipable/>
      />
    </AppSafeAreaScreen>
  );
}

NortificationScreen.propTypes = {};

export default NortificationScreen;
