import { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import colors from "./app/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import MainBottomTabNavigator from "./app/navigation/MainBottomTabNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { UserContextProvider } from "./app/context/UserContext";
import useSecureStore from "./app/hooks/useSecureStore";

export default function App() {
  const [token, setToken, clearToken] = useSecureStore("token", null);
  const isLoggedIn = Boolean(token);
  return (
    <UserContextProvider value={{ token, setToken, clearToken }}>
      <NavigationContainer theme={navigationTheme}>
        {isLoggedIn ? <MainBottomTabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </UserContextProvider>
  );
}
