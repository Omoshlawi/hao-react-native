import React from "react";
import PropTypes from "prop-types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropertyEditingScreen from "../screens/PropertyEditingScreen";
import PropertiesStackNavigator from "./PropertiesStackNavigator";
import SearchScreen from "../screens/SearchScreen";
import UserStackNavigation from "./UserStackNavigation";
import routes from "./routes";
const Tab = createBottomTabNavigator();

const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

function MainBottomTabNavigator(props) {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.light,
        tabBarIconStyle: {},
      }}
    >
      <Screen
        name={routes.HOME_MAIN}
        component={PropertiesStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Screen
        name={routes.SEARCH_MAIN}
        component={SearchScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons size={size} name="magnify" color={color} />
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
              color={colors.secondary}
            />
          ),
          headerTitleContainerStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />

      <Screen
        name={routes.USER_CENTER_MAIN}
        component={UserStackNavigation}
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

MainBottomTabNavigator.propTypes = {};

export default MainBottomTabNavigator;
