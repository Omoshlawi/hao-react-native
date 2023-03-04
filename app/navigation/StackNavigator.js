import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator; //Contain children stack screens and only one how to do to navigate between the screens
const Screen = Stack.Screen;

/**
 * https://reactnavigation.org/docs/navigating
 * navigation prop passed on screen have push and navigate which confuse, differnce is that push moves to specified
 * screen name even if it exist already in stack, but navigate makes sure there is a single instance of screen in the stack
 * when when renavigate you remain there, to demo fot to screen component ie screen wrapped in stach screen and use
 * navigation.navigate("name")
 * navigation.push("name")
 * The name should be the name of the screen you are in, ie navigating to screen you current are in, fir push it will addit again to stack
 * but for navigate it remain there
 * Navigate to a route multiple times
 * 
 * navigation.navigate('RouteName') pushes a new route to the native stack navigator if it's not already
 *  in the stack, otherwise it jumps to that screen.
We can call navigation.push('RouteName') as many times as we like and it will continue pushing routes.
The header bar will automatically show a back button, but you can programmatically go back by calling 
navigation.goBack(). On Android, the hardware back button just works as expected.
You can go back to an existing screen in the stack with navigation.navigate('RouteName'), 
and you can go back to the first screen in the stack with navigation.popToTop().
The navigation prop is available to all screen components (components defined as screens in route 
  configuration and rendered by React Navigation as a route).
 */

function StackNavigator(props) {
  return (
    // Screen options tales similar props like options of Screen children and are used by default and can be overidded when options of screen is used
    <Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
        scre
      />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Register" component={RegisterScreen}/>
    </Navigator>
  );
}

StackNavigator.propTypes = {};

export default StackNavigator;
