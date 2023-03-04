import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../utils/colors";
import PropTypes from "prop-types";
import React from "react";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

function UserStackNavigation(props) {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen name="UserCenter" component={AccountScreen} />
    </Navigator>
  );
}

UserStackNavigation.propTypes = {};

export default UserStackNavigation;
