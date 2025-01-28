import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Nav = ({ propTop }) => {
  const navStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.nav, navStyle]}>
      <View style={styles.navChild} />
      <Image
        style={[styles.navItem, styles.navItemLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.navItemLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.car}>Car</Text>
      <Text style={[styles.abc, styles.abcTypo]}>Abc</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      <Text style={[styles.setting, styles.abcTypo]}>Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "7.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "40.91%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  abcTypo: {
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
    position: "absolute",
  },
  homeTypo: {
    top: "86.36%",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
    position: "absolute",
  },
  navChild: {
    height: "58.33%",
    width: "97.66%",
    top: "21.21%",
    right: "0%",
    bottom: "20.45%",
    left: "2.34%",
    backgroundColor: Color.colorDarkorange_100,
    position: "absolute",
  },
  navItem: {
    height: "45.45%",
    width: "29.17%",
    top: "0%",
    right: "70.83%",
    bottom: "54.55%",
    left: "0%",
  },
  vectorIcon: {
    height: "17.42%",
    top: "12.12%",
    right: "81.77%",
    bottom: "70.45%",
    left: "10.94%",
  },
  vectorIcon1: {
    width: "6.25%",
    right: "63.28%",
    bottom: "36.36%",
    left: "30.47%",
    height: "22.73%",
  },
  vectorIcon2: {
    height: "16.67%",
    top: "45.45%",
    right: "45.05%",
    bottom: "37.88%",
    left: "47.66%",
  },
  vectorIcon3: {
    width: "3.13%",
    top: "43.18%",
    right: "27.6%",
    bottom: "34.09%",
    left: "69.27%",
    height: "22.73%",
  },
  vectorIcon4: {
    height: "21.97%",
    width: "7.03%",
    right: "8.33%",
    bottom: "37.12%",
    left: "84.64%",
  },
  car: {
    top: "53.03%",
    left: "6.51%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
    position: "absolute",
  },
  abc: {
    top: "85.61%",
    left: "25.78%",
  },
  home: {
    left: "44.27%",
  },
  profile: {
    left: "63.54%",
  },
  setting: {
    top: "87.12%",
    left: "80.99%",
  },
  nav: {
    top: 707,
    left: -9,
    width: 384,
    height: 132,
    position: "absolute",
  },
});

export default Nav;
