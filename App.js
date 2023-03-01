import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppSafeAreaScreen from "./app/components/AppSafeAreaScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import PropertyDetailScreen from "./app/screens/PropertyDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/utils/colors";

export default function App() {
  return (
    <AppSafeAreaScreen>
      <AppIcon
        name="email"
        
      />
    </AppSafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding: 20,
  },
});
