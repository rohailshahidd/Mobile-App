import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Property1Variant2 from "../components/Property1Variant2";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import Newcomponent1 from "../components/Newcomponent1";

const SlashScreen = () => {
  return (
    <View style={styles.slashScreen}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-1.png")}
      />
      <View style={styles.text}>
        <Text style={styles.revolutionizeYourRide}>
          Revolutionize your ride with our seamless car care solution, crafted
          to keep your wheels turning and your vehicle shining. Uncover the
          future of automotive TLC at your fingertips. Let's journey towards
          automotive perfection together!
        </Text>
        <Text style={[styles.carCare, styles.text1Typo]}>{`CAR CARE `}</Text>
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
        <Text style={[styles.text1, styles.text1Typo]}>{`5:01 `}</Text>
      </View>
      <Newcomponent1
        buttonText="Get Started"
        propTop={735}
        propLeft={7}
        propBackgroundColor="#ff8a00"
        propBorderColor="#000"
        propBorderWidth={1}
        propWidth={360}
        navigationDestination="Registration"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    top: 0,
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
  img437311: {
    top: -219,
    width: 375,
    height: 1062,
    left: 0,
    position: "absolute",
  },
  revolutionizeYourRide: {
    marginLeft: -174,
    top: 412,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    height: 159,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    width: 348,
    left: "50%",
    position: "absolute",
  },
  carCare: {
    left: 37,
    fontSize: FontSize.size_17xl,
    width: 291,
    height: 51,
    textAlign: "center",
  },
  text: {
    marginLeft: -171.5,
    top: 136,
    height: 571,
    width: 348,
    left: "50%",
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
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "800",
    top: 0,
    left: 0,
  },
  bar: {
    top: 10,
    left: 27,
    width: 339,
    height: 27,
    position: "absolute",
  },
  slashScreen: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SlashScreen;
