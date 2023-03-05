import { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import colors from "./app/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import MainBottomTabNavigator from "./app/navigation/MainBottomTabNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { UserContextProvider } from "./app/context/UserContext";

export default function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  return (
    <UserContextProvider value={{ user, setUser, token, setToken }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <MainBottomTabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </UserContextProvider>
  );
}
