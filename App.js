import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppCard from "./app/components/AppCard";
import PropertyDetailScreen from "./app/screens/PropertyDetailScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/utils/colors";

export default function App() {
  return (
    <PropertyDetailScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight,
    backgroundColor: colors.grey,
    padding:20
  },
});
