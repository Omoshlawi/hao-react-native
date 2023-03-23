import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../utils/colors";
import React from "react";
import PropertyDetailScreen from "../screens/property/PropertyDetailScreen";
import PropertyListScreen from "../screens/property/PropertyListScreen";
import routes from "./routes";
import ViewImageScreen from "../screens/ViewImageScreen";
import ReviewsScreen from "../screens/property/ReviewsScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

function PropertiesStackNavigator(props) {
  return (
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen
        name={routes.PROPERTY_LIST_PROP}
        component={PropertyListScreen}
        options={{
          headerTitle: "Properties",
        }}
      />
      <Screen
        name={routes.PROPERTY_DETAIL_PROP}
        component={PropertyDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerShown: false,
        })}
      />
      <Screen
        name={routes.PROPERTY_REVIEW_PROP}
        component={ReviewsScreen}
        options={({ route }) => ({
          headerTitle: `${route.params.title} Reviews`,
        })}
      />
    </Navigator>
  );
}


export default PropertiesStackNavigator;
