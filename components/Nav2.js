import React, { useMemo } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Nav2 = ({ userid,propTop, propLeft }) => {
  const navigation = useNavigation(); // Initialize navigation object

  const nav2Style = useMemo(() => {
    return {
      ...getStyleValue("userid", userid),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [userid, propTop, propLeft]); // Ensure userid is included in the dependency array

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName, { userId : userid });
  };

  return (
    <View style={[styles.nav, nav2Style]}>
      <View style={styles.navChild} />
        <Image
          style={[styles.navItem, styles.navItemLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      <TouchableWithoutFeedback onPress={() => handleNavigation("Edit")}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleNavigation("TestH")}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleNavigation("Home")}>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      </TouchableWithoutFeedback>
        <Image
          style={[styles.vectorIcon3, styles.navItemLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      <TouchableWithoutFeedback onPress={() => handleNavigation("Notifications")}>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </TouchableWithoutFeedback>
      <Text style={[styles.abc, styles.abcTypo]}></Text>
      <Text style={[styles.abc1, styles.abcTypo]}></Text>
      <Text style={[styles.home, styles.abcTypo]}></Text>
      <Text style={[styles.profile, styles.abcTypo]}>Profile</Text>
      <Text style={[styles.setting, styles.abcTypo]}></Text>
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
    top: "45.45%",
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
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    color: Color.colorWhite,
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
    right: "14.58%",
    bottom: "54.55%",
    left: "56.25%",
  },
  vectorIcon: {
    height: "17.42%",
    right: "81.77%",
    left: "10.94%",
    bottom: "37.12%",
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
    right: "45.05%",
    bottom: "37.88%",
    left: "47.66%",
  },
  vectorIcon3: {
    width: "3.13%",
    top: "9.85%",
    right: "27.6%",
    bottom: "67.42%",
    left: "69.27%",
    height: "22.73%",
  },
  vectorIcon4: {
    height: "21.97%",
    width: "7.03%",
    right: "8.33%",
    left: "84.64%",
    bottom: "37.12%",
  },
  abc: {
    top: "82.58%",
    left: "6.51%",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  abc1: {
    top: "85.61%",
    left: "25.78%",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  home: {
    top: "86.36%",
    left: "44.27%",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  profile: {
    top: "54.55%",
    left: "62.76%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  setting: {
    top: "87.12%",
    left: "80.99%",
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  nav: {
    top: 706,
    left: -8,
    width: 384,
    height: 132,
    position: "absolute",
  },
});

export default Nav2;
