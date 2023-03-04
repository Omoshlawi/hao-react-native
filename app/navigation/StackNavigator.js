import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

/**
 * navigation prop passed on screen have push and navigate which confuse, differnce is that push moves to specified
 * screen name even if it exist already in stack, but navigate makes sure there is a single instance of screen in the stack
 * when when renavigate you remain there, to demo fot to screen component ie screen wrapped in stach screen and use
 * navigation.navigate("name")
 * navigation.push("name")
 * The name should be the name of the screen you are in, ie navigating to screen you current are in, fir push it will addit again to stack
 * but for navigate it remain there
 */

function StackNavigator(props) {
  return (
    <Navigator>
      <Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome" }}
      />
    </Navigator>
  );
}

StackNavigator.propTypes = {};

export default StackNavigator;
