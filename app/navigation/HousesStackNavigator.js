import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../utils/colors";
import React from "react";
import routes from "./routes";
import HousesListScreen from "../screens/house/HousesListScreen";
import HouseDetailsScreen from "../screens/house/HouseDetailsScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

const HousesStackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen
        name={routes.HOUSE_LIST_SCREEN}
        component={HousesListScreen}
        options={{
          headerTitle: "Houses",
        }}
      />
      <Screen
        name={routes.HOUSE_DETAIL_SCREEN}
        component={HouseDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default HousesStackNavigator;
