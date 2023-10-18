import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./presentation/feature/sign_in/view/sign_in_screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./presentation/feature/home_page/view/home_screen";
import ListScreen from "./presentation/feature/list_friends/view/list_friends_screen";
import CounterScreens from "./presentation/feature/counter/view/counter_screen";
import SquareScreens from "./presentation/feature/square_screens/view/square_screens";
import WelcomeScreen from "./presentation/feature/welcome/welcome_screen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="ListScreens" component={ListScreen} />
        <Stack.Screen name="Counters" component={CounterScreens} />
        <Stack.Screen name="SquareScreens" component={SquareScreens} />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
