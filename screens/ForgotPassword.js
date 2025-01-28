import React, { useRef } from "react";
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Property1Variant1 from "../components/Property1Variant1";
import PropComp from "../components/propcomp";
import Property1Default from "../components/Property1Default";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import Newcomponent1 from "../components/Newcomponent1";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const emailRef = useRef();

  const SERVER_URL = 'http://ip:port/';
  const RESET_PASSWORD_URL = `${SERVER_URL}forgot-password`;

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleResetPasswordButtonPress = async () => {
    const email = emailRef.current.getData();

    if (!email) {
      Alert.alert("Missing Information", "Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const userdata = {
      email
    };

    try {
      const response = await fetch(RESET_PASSWORD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata)
      });

      if (!response.ok) {
        throw new Error('Failed to reset password');
      }

      Alert.alert('Success', 'Password reset instructions sent to your email.');
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.forgotPassword}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-1.png")}
      />
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.forgotPassword1, styles.text1Position]}>
          Forgot Password
        </Text>
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
        <Text style={[styles.text1, styles.text1Position]}>{`5:01 `}</Text>
      </View>
      <PropComp
        buttonText="Reset Password"
        propTop={450}
        propLeft={6}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        onPress={handleResetPasswordButtonPress}
        navigationDestination="Login"
      />
      <Newcomponent1
        buttonText="Back"
        propTop={721}
        propLeft={6}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        navigationDestination="Login"
      />
      <Property1Default
        ref={emailRef}
        emailAddressLabel="Email Address"
        showEmailAddress
        propTop={382}
        propLeft={9}
        propWidth={360}
        propHeight="unset"
        propRight="unset"
        propBottom="unset"
        propBorderWidth={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 51,
    width: 313,
  },
  text1Position: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 21,
    width: 21,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  img437311: {
    top: -219,
    width: 375,
    height: 1062,
    left: 0,
    position: "absolute",
  },
  forgotPassword1: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    height: 51,
    width: 313,
  },
  text: {
    top: 162,
    left: 32,
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
  },
  bar: {
    top: 10,
    left: 27,
    width: 339,
    height: 27,
    position: "absolute",
  },
  forgotPassword: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgotPassword;
