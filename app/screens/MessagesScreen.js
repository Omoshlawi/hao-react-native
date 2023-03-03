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
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at augue eget. Condimentum lacinia quis vel eros. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Diam quis enim lobortis scelerisque fermentum dui faucibus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet consectetur adipiscing elit ut aliquam purus sit. Elementum sagittis vitae et leo duis ut. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Lorem ipsum dolor sit amet consectetur adipiscing. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Ornare massa eget egestas purus viverra accumsan. Dignissim diam quis enim lobortis scelerisque. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Leo a diam sollicitudin tempor id eu nisl nunc mi.

Morbi tempus iaculis urna id. Et sollicitudin ac orci phasellus. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Volutpat maecenas volutpat blandit aliquam etiam erat. Non blandit massa enim nec. Ac tincidunt vitae semper quis lectus. Tincidunt id aliquet risus feugiat in. Suspendisse sed nisi lacus sed. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.

Cursus sit amet dictum sit amet. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas integer. Dui vivamus arcu felis bibendum ut tristique. Felis eget velit aliquet sagittis id consectetur purus ut. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Elementum integer enim neque volutpat ac tincidunt vitae semper.

Scelerisque in dictum non consectetur a. In fermentum et sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim diam vulputate ut pharetra. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Condimentum mattis pellentesque id nibh tortor id. Porta lorem mollis aliquam ut porttitor leo. At erat pellentesque adipiscing commodo elit. Metus aliquam eleifend mi in nulla. Sed felis eget velit aliquet sagittis id consectetur purus ut. In hac habitasse platea dictumst quisque sagittis purus sit. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Aliquam nulla facilisi cras fermentum odio. Leo vel fringilla est ullamcorper eget nulla. Eu consequat ac felis donec et odio pellentesque diam.

Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Egestas congue quisque egestas diam in arcu. Est ultricies integer quis auctor elit sed. Sed enim ut sem viverra aliquet eget. Vivamus arcu felis bibendum ut. Nisi quis eleifend quam adipiscing. In fermentum et sollicitudin ac orci phasellus egestas. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mauris vitae ultricies leo integer malesuada nunc vel risus. Mattis enim ut tellus elementum. At risus viverra adipiscing at in tellus integer. Viverra aliquet eget sit amet tellus. Cras adipiscing enim eu turpis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nisl purus in mollis nunc. Faucibus scelerisque eleifend donec pretium vulputate.`,
    image: require("../assets/logo-red.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/logo-red.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/logo-red.png"),
  },
];

/*

*/

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
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
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([...initialMessages]);
        }}
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
