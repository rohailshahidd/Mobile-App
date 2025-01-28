import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Bar = () => {
  return (
    <View style={styles.barPosition}>
      <View style={[styles.barChild, styles.barPosition]} />
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
      <Text style={styles.text}>{`5:01 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    height: 45,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 21,
    width: 21,
    top: 15,
    position: "absolute",
  },
  barChild: {
    backgroundColor: Color.colorDarkorange_100,
  },
  wifiIcon: {
    left: 306,
  },
  signalIcon: {
    left: 277,
  },
  batteryThreeQuartersIcon: {
    left: 336,
  },
  text: {
    top: 9,
    left: 18,
    fontSize: FontSize.size_base,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
});

export default Bar;
