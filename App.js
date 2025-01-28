const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import InputExpenses from "./screens/InputExpenses";
import AddFuelDetails1 from "./screens/AddFuelDetails1";
import FuelDetailsMSg3 from "./screens/FuelDetailsMSg3";
import ExpenseLog1 from "./screens/ExpenseLog1";
import ForgotPassword from "./screens/ForgotPassword";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import SlashScreen from "./screens/SlashScreen";
import Home from "./screens/Home";
import Edit from "./screens/Edit";
import Profile from "./screens/Profile";
import TestH from "./screens/TestH";
import Max from "./screens/Max";
import Reviews from "./screens/Reviews";
import Notifications from "./screens/Notifications";  

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
              name="SlashScreen"
              component={SlashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
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
            <Stack.Screen
              name="IPhone1415ProMax"
              component={IPhone1415ProMax}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415ProMax1"
              component={IPhone1415ProMax1}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="TestH"
              component={TestH}
              options={{ headerShown: false }}
            />
          <Stack.Screen
              name="Max"
              component={Max}
              options={{ headerShown: false }}
            />
          <Stack.Screen
              name="Reviews"
              component={Reviews}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
          
        ) : (
          <ForgotPassword />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
