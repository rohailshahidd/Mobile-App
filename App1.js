const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import InputExpenses from "./screens/InputExpenses";
import AddFuelDetails1 from "./screens/AddFuelDetails1";
import FuelDetailsMSg3 from "./screens/FuelDetailsMSg3";
import ExpenseLog1 from "./screens/ExpenseLog1";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "JockeyOne-Regular": require("./assets/fonts/JockeyOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
              name="AddFuelDetails1"
              component={AddFuelDetails1}
              options={{ headerShown: false }}
            />

          <Stack.Screen
              name="InputExpenses"
              component={InputExpenses}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="FuelDetailsMSg3"
              component={FuelDetailsMSg3}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ExpenseLog1"
              component={ExpenseLog1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
