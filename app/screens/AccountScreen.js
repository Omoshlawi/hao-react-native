import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import AppSafeAreaScreen from "../components/AppSafeAreaScreen";
import ListItem from "../components/ListItem";
import colors from "../utils/colors";
import AppIcon from "../components/AppIcon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];

function AccountScreen(props) {
  return (
    <AppSafeAreaScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Laurent Ouma"
          subTitle="lawiomosh3@gmail.com"
          image={require("../assets/logoBlack.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<AppIcon name="logout" backgroundColor="ffe66d" />}
      />
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

AccountScreen.propTypes = {};

export default AccountScreen;
