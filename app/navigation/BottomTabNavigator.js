import React from "react";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropertyEditingScreen from "../screens/property/PropertyEditingScreen";
import SearchScreen from "../screens/SearchScreen";
import routes from "./routes";
import PropertyLocationsScreen from "../screens/property/PropertyLocationsScreen";
import TabBarButton from "../components/TabBarButton";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/user/AccountScreen";
const Tab = createBottomTabNavigator();

const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || routes.HOME_MAIN;

  if (
    routeName === routes.USER_CENTER_ACCOUNT ||
    routeName === routes.USER_PROFILE_EDIT_ACCOUNT ||
    routeName === routes.USER_PROPERTIES
  ) {
    return false;
  }

  return true;
};

function BottomTabNavigator(props) {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarActiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.tabBackground,
        // tabBarStyle: { backgroundColor: colors.tabBackground },
        tabBarLabelStyle: { fontWeight: "bold" },
      })}
    >
      <Screen
        name={routes.HOME_MAIN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Screen
        name={routes.PROPERTIES_LOCATION}
        component={PropertyLocationsScreen}
        options={{
          title: "NearBy",
          headerShown: false,
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              size={size}
              name="home-map-marker"
              color={color}
            />
          ),
        }}
      />
      <Screen
        name={routes.SEARCH_MAIN}
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarButton: ({ onPress }) => (
            <TabBarButton
              name="magnify"
              size={60}
              backgroundColor={colors.primary}
              color={colors.white}
              onPress={onPress}
            />
          ),
        }}
      />

      <Screen
        name={routes.PROPERTY_ADD_MAIN}
        component={PropertyEditingScreen}
        options={{
          headerTitle: "Add new Property",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              size={size}
              name="plus-circle"
              color={color}
            />
          ),
          tabBarLabel: "New Property",
          headerTitleContainerStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />

      <Screen
        name={routes.USER_CENTER_MAIN}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              size={size}
              name="account-circle-outline"
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

BottomTabNavigator.propTypes = {};

export default BottomTabNavigator;
