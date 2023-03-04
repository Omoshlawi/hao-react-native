import React from "react";
import PropTypes from "prop-types";
import AccountScreen from "../screens/AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PropertyListScreen from "../screens/PropertyListScreen";
import colors from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigator = Tab.Navigator;
const Screen = Tab.Screen;

function TabNavigator(props) {
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
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              size={size}
              name="account-circle-outline"
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Properties"
        component={PropertyListScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

TabNavigator.propTypes = {};

export default TabNavigator;
