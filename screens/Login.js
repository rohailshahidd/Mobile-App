import React, { useRef, useEffect } from "react";
import { Image, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import PropComp from "../components/propcomp";
import Property1Default from "../components/Property1Default";
import PasswordField from "../components/PasswordField";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import Newcomponent1 from "../components/Newcomponent1";

const Login = () => {
  const navigation = useNavigation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const SERVER_URL = 'http://ip:port/';
  const LOGIN_URL = `${SERVER_URL}login`;

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginButtonPress = async () => {
    const email = emailRef.current.getData();
    const password = passwordRef.current.getData();

    if (!email || !password) {
      Alert.alert("Missing Information", "Please enter your email and password.");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const userdata = {
      email,
      password
    };

    try {
      const response =  await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata)
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      // Parse response data to get user ID
      const data = await response.json();
      const userId = data.userId;

      // Navigate to home screen or wherever needed using the userId
      navigation.navigate("Home", { userId });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.login}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-1.png")}
      />
      <View style={styles.text}>
        <Text style={styles.signup}>Login</Text>
      </View>
      <Image
        style={styles.shapesIcon}
        contentFit="cover"
        source={require("../assets/shapes.png")}
      />
      <View style={styles.bar}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/batterythreequarters.png")}
        />
        <Text style={styles.text1}>{`5:01 `}</Text>
      </View>
      <PropComp
        buttonText="Login"
        propTop={530}
        propLeft={7}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        onPress={handleLoginButtonPress}
      />
      <Newcomponent1
        buttonText="Signup"
        propTop={724}
        propLeft={7}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        navigationDestination="Registration"
      />
      <Newcomponent1
        buttonText="Forgot Password"
        propTop={583}
        propLeft={7}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        navigationDestination="ForgotPassword"
      />
      <Text style={[styles.dontHaveAn, styles.dontHaveAnLayout]}>
        Don’t Have an Account?
      </Text>
      <Property1Default
        ref={emailRef}
        emailAddressLabel="Email Address"
        showEmailAddress
        propTop={406}
        propLeft={7}
        propWidth={360}
        propHeight="unset"
        propRight="unset"
        propBottom="unset"
        propBorderWidth={1}
      />
      <PasswordField
        ref={passwordRef}
        placeholder="Password"
        propTop={470}
        propLeft={10}
        propWidth={360}
        propHeight={46}
        propBorderWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 21,
    width: 21,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  dontHaveAnLayout: {
    height: 18,
    width: 328,
    color: Color.colorWhite,
    position: "absolute",
  },
  dontHaveAnTypo: {
    color: Color.colorDarkorange_300,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
  },
  img437311: {
    top: -219,
    width: 375,
    height: 1062,
    left: 0,
    position: "absolute",
  },
  signup: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    top: 0,
    height: 51,
    width: 291,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 136,
    left: 53,
    height: 51,
    width: 291,
    position: "absolute",
  },
  shapesIcon: {
    top: -111,
    left: -100,
    width: 536,
    height: 287,
    position: "absolute",
  },
  wifiIcon: {
    left: 288,
  },
  signalIcon: {
    left: 259,
  },
  batteryThreeQuartersIcon: {
    left: 318,
  },
  text1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    top: 0,
    left: 0,
    position: "absolute",
  },
  bar: {
    top: 10,
    left: 27,
    width: 339,
    height: 27,
    position: "absolute",
  },
  dontHaveAn: {
    top: 683,
    left: 23,
    color: Color.colorDarkorange_300,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
  },
  forgotPassword1: {
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    color: Color.colorDarkorange_300,
    fontSize: FontSize.size_mini,
  },
  forgotPassword: {
    top: 542,
    left: 25,
  },
  login: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
