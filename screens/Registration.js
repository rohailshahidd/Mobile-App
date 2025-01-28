import React, { useRef, useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Property1Default from "../components/Property1Default";
import PasswordField from "../components/PasswordField";
import PropComp from "../components/propcomp";
import Newcomponent1 from "../components/Newcomponent1";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation();
  const fullnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const SERVER_URL = 'http://192.168.8.100:3000/';
  const SAVE_USER_URL = `${SERVER_URL}/register`;

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidFullName = (fullname) => {
    return fullname.trim().includes(" ");
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression to validate phone number format
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSaveButtonPress = async () => {
    const fullname = fullnameRef.current.getData();
    const email = emailRef.current.getData();
    const phonenumber = phoneRef.current.getData();
    const password = passwordRef.current.getData();
    const confirmpassword = confirmPasswordRef.current.getData();

    if (!email || !password || !fullname || !phonenumber || !confirmpassword) {
      Alert.alert("Missing Information", "Please ensure all fields are filled.");
      return;
    }

    if (!isValidFullName(fullname)) {
      Alert.alert("Invalid Name", "Please enter your full name with at least one space (e.g., First Last).");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(phonenumber)) {
      Alert.alert("Invalid Phone Number", "Please enter a valid 10-digit phone number.");
      return;
    }

    if (password !== confirmpassword) {
      Alert.alert("Password Mismatch", "The passwords do not match. Please try again.");
      return;
    }

    const userdata = {
      fullname,
      email,
      phonenumber,
      password,
      confirmpassword
    };

    try {
      const response =  await fetch('http://192.168.8.100:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata)
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      Alert.alert('Success', 'Registration successful!', [
        { text: 'OK', onPress: () => navigation.navigate("Login") }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
};


  return (
    <View style={styles.registration}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-1.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
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
  buttonText="Signup"
  propTop={575}
  propLeft={4}
  propBackgroundColor="#ff8a00"
  propBorderColor="#000"
  propBorderWidth={1}
  propWidth={360}
  onPress={handleSaveButtonPress}
  navigationDestination="Home"
/>

      <Newcomponent1
        buttonText="Login"
        propTop={736}
        propLeft={7}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        navigationDestination="Login"
      />
      <Text style={[styles.alreadyHaveAn, styles.signupTypo]}>
        Already Have an Account?
      </Text>
      <Property1Default
        ref={fullnameRef}
        emailAddressLabel="Full Name"
        showEmailAddress
        propTop={221}
        propLeft={9}
        propWidth={360}
        propHeight="unset"
        propRight="unset"
        propBottom="unset"
        propBorderWidth={1}
      />
      <Property1Default
      ref={emailRef}
        emailAddressLabel="Email Address"
        showEmailAddress
        propTop={283}
        propLeft={9}
        propWidth={360}
        propHeight="unset"
        propRight="unset"
        propBottom="unset"
        propBorderWidth={1}
      />
      <Property1Default
      ref={phoneRef}
        emailAddressLabel="Phone Number"
        showEmailAddress
        propTop={345}
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
    propTop={406}
    propLeft={10}
    propWidth={360}
    propHeight={46}
    propBorderWidth={1}
  />
  <PasswordField
  ref={confirmPasswordRef}
    placeholder="Confirm Password"
    propTop={420}
    propLeft={10}
    propWidth={360}
    propHeight={46}
    propBorderWidth={1}
  />
    </View>
  );
};


const styles = StyleSheet.create({
  signupTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    height: 21,
    width: 21,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  text1Position: {
    color: Color.colorWhite,
    top: 0,
    left: 0,
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
    color: Color.colorWhite,
    top: 0,
    left: 0,
    textAlign: "center",
    height: 51,
    width: 291,
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
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  bar: {
    top: 10,
    left: 27,
    width: 339,
    height: 27,
    position: "absolute",
  },
  alreadyHaveAn: {
    top: 683,
    left: 22,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkorange_300,
    width: 334,
    height: 23,
  },
  registration: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Registration;
