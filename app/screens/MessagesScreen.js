import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeletionAction from "../components/ListItemDeletionAction";
import { SwipeListView } from "react-native-swipe-list-view";
import colors from "../utils/colors";

const initialMessages = [
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

/*

*/

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    const newMessages = messages.filter((ms) => ms.id !== message.id);
    setMessages(newMessages);
  };

  const renderFrontRow = ({ item }) => (
    <ListItem
      style={styles.frontRow}
      image={item.image}
      title={item.title}
      subTitle={item.description}
      onPress={() => {
        console.log(item);
      }}
    />
  );

  const renderHiddentBackRow = ({ item }) => (
    <ListItemDeletionAction onPress={() => handleDelete(item)} />
  );

  return (
    <AppSafeAreaScreen>
      <SwipeListView
        data={messages}
        useFlatList={true}
        keyExtractor={(message) => message.id}
        renderItem={renderFrontRow}
        ItemSeparatorComponent={ListItemSeparator}
        renderHiddenItem={renderHiddentBackRow}
        disableRightSwipe={true}
        rightOpenValue={-75}
        // leftOpenValue={75}
      />
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  frontRow: {
    backgroundColor: colors.white,
  },
  backRow: {},
});

MessagesScreen.propTypes = {};

export default MessagesScreen;
