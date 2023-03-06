import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../utils/colors";
import PropTypes from "prop-types";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";
import UserProfileScreen from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

function UserStackNavigation(props) {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen name={routes.USER_CENTER_ACCOUNT} component={AccountScreen} />
      <Screen
        name={routes.USER_PROFILE_EDIT_ACCOUNT}
        component={UserProfileScreen}
      />
    </Navigator>
  );
}

UserStackNavigation.propTypes = {};

export default UserStackNavigation;
