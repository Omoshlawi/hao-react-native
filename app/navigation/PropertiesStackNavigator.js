import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../utils/colors";
import PropTypes from "prop-types";
import React from "react";
import PropertyDetailScreen from "../screens/property/PropertyDetailScreen";
import PropertyListScreen from "../screens/property/PropertyListScreen";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

function PropertiesStackNavigator(props) {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Screen name={routes.PROPERTY_LIST_PROP} component={PropertyListScreen} />
      <Screen
        name={routes.PROPERTY_DETAIL_PROP}
        component={PropertyDetailScreen}
      />
    </Navigator>
  );
}

PropertiesStackNavigator.propTypes = {};

export default PropertiesStackNavigator;
