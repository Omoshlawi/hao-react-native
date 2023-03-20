import { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import colors from "./app/utils/colors";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./app/navigation/AuthStackNavigator";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { UserContextProvider } from "./app/context/UserContext";
import useSecureStore from "./app/hooks/useSecureStore";
import MainStackNavigator from "./app/navigation/MainStackNavigator";

export default function App() {
  const [token, setToken, clearToken] = useSecureStore("token", null);
  const [user, setUser] = useState();
  return (
    <UserContextProvider value={{ token, setToken, clearToken, user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <MainStackNavigator/>
      </NavigationContainer>
    </UserContextProvider>
  );
}
