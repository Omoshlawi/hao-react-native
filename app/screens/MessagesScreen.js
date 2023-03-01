import React from "react";
import PropTypes from "prop-types";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/logoBlack.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/logoBlack.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/logoBlack.png"),
  },
];

function MessagesScreen(props) {
  return (
    <AppSafeAreaScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      />
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({});

MessagesScreen.propTypes = {};

export default MessagesScreen;
