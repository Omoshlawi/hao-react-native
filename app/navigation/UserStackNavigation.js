import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../utils/colors";
import PropTypes from "prop-types";
import React from "react";
import routes from "./routes";
import UserProfileScreen from "../screens/user/UserProfileScreen";
import AccountScreen from "../screens/user/AccountScreen";
import UserPropertyScreen from "../screens/user/UserPropertyScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;


function UserStackNavigation(props) {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen
        name={routes.USER_CENTER_ACCOUNT}
        component={AccountScreen}
      />
      <Screen
        name={routes.USER_PROFILE_EDIT_ACCOUNT}
        component={UserProfileScreen}
      />
      <Screen
        name={routes.USER_PROPERTIES}
        component={UserPropertyScreen}
        options={{headerTitle: "My properties"}}
      />
    </Navigator>
  );
}

UserStackNavigation.propTypes = {};

export default UserStackNavigation;
