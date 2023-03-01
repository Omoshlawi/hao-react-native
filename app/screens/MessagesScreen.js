import React from "react";
import PropTypes from "prop-types";
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import ListItem from "../components/ListItem";

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
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ?StatusBar.currentHeight:0
    }
})

MessagesScreen.propTypes = {};

export default MessagesScreen;
