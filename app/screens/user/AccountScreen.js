import React, { useContext, useEffect } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import AppSafeAreaScreen from "../../components/AppSafeAreaScreen";
import ListItem from "../../components/ListItem";
import colors from "../../utils/colors";
import AppIcon from "../../components/AppIcon";
import ListItemSeparator from "../../components/ListItemSeparator";
import UserContext from "../../context/UserContext";
import { useUser } from "../../api/hooks";
import useSecureStore from "../../hooks/useSecureStore";
import routes from "../../navigation/routes";

const menuItems = [
  {
    title: "My Properties",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    route: routes.USER_PROPERTIES,
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    routes: routes.USER_PROPERTIES,
  },
];

function AccountScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const { logout, getUser } = useUser();
  useEffect(() => {
    if (!user) getUser();
  }, []);
  return (
    <AppSafeAreaScreen style={styles.screen}>
      <View style={styles.container}>
        {user && (
          <ListItem
            title={`${user.first_name} ${user.last_name}`}
            subTitle={user.email}
            image={user.profile.image ? { uri: user.profile.image } : null}
            IconComponent={
              user.profile.image ? null : (
                <AppIcon
                  name="account"
                  color={colors.white}
                  backgroundColor={colors.primary}
                />
              )
            }
            onPress={() => {
              navigation.navigate(routes.USER_PROFILE_EDIT_ACCOUNT, user);
            }}
          />
        )}
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.route)}
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
        onPress={() => {
          Alert.alert("Logout", "Are you sure you want to logout?", [
            {
              text: "Logout",
              onPress: () => {
                logout();
              },
            },
            { text: "Cancel" },
          ]);
        }}
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
