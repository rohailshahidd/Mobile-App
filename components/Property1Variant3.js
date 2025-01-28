import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant3 = ({
  vector,
  vector1,
  abc,
  propTop,
  propRight,
  propLeft,
  propTop1,
  propBottom,
  propTop2,
  propBottom1,
  propRight1,
  propLeft1,
  propTop3,
  propBottom2,
  propTop4,
  propLeft2,
  propTop5,
  propLeft3,
  propColor,
  propTop6,
  propLeft4,
  propColor1,
}) => {
  const property1Variant5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft),
    };
  }, [propRight, propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop1, propBottom]);

  const vectorIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop2),
      ...getStyleValue("bottom", propBottom1),
    };
  }, [propTop2, propBottom1]);

  const vectorIcon2Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight1),
      ...getStyleValue("left", propLeft1),
    };
  }, [propRight1, propLeft1]);

  const vectorIcon3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop3),
      ...getStyleValue("bottom", propBottom2),
    };
  }, [propTop3, propBottom2]);

  const abcStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop4),
      ...getStyleValue("left", propLeft2),
    };
  }, [propTop4, propLeft2]);

  const abc1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop5),
      ...getStyleValue("left", propLeft3),
      ...getStyleValue("color", propColor),
    };
  }, [propTop5, propLeft3, propColor]);

  const settingStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop6),
      ...getStyleValue("left", propLeft4),
      ...getStyleValue("color", propColor1),
    };
  }, [propTop6, propLeft4, propColor1]);

  return (
    <View style={[styles.property1variant5, property1Variant5Style]}>
      <View style={styles.property1variant5Child} />
      <Image
        style={[
          styles.property1variant5Item,
          styles.vectorIcon4Layout,
          groupIconStyle,
        ]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1, vectorIconStyle]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout, vectorIcon1Style]}
        contentFit="cover"
        source={vector}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout, vectorIcon2Style]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIcon4Layout, vectorIcon3Style]}
        contentFit="cover"
        source={vector1}
      />
      <Text style={[styles.abc, styles.abcTypo, abcStyle]}>Abc</Text>
      <Text style={[styles.abc1, styles.abcTypo, abc1Style]}>{abc}</Text>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      <Text style={[styles.setting, styles.abcTypo, settingStyle]}>
        Setting
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon4Layout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout1: {
    bottom: "37.88%",
    width: "7.29%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: "22.73%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  abcTypo: {
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
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
    position: "absolute",
  },
  property1variant5Child: {
    height: "58.33%",
    width: "97.66%",
    top: "21.21%",
    right: "0%",
    bottom: "20.45%",
    left: "2.34%",
    backgroundColor: Color.colorDarkorange_100,
    position: "absolute",
  },
  property1variant5Item: {
    height: "45.45%",
    width: "29.17%",
    top: "0%",
    right: "-2.6%",
    bottom: "54.55%",
    left: "73.44%",
  },
  vectorIcon: {
    height: "17.42%",
    top: "44.7%",
    right: "81.77%",
    left: "10.94%",
  },
  vectorIcon1: {
    width: "6.25%",
    top: "40.91%",
    right: "63.28%",
    bottom: "36.36%",
    left: "30.47%",
  },
  vectorIcon2: {
    height: "16.67%",
    top: "45.45%",
    right: "45.05%",
    left: "47.66%",
  },
  vectorIcon3: {
    width: "3.13%",
    top: "43.18%",
    right: "27.6%",
    bottom: "34.09%",
    left: "69.27%",
  },
  vectorIcon4: {
    height: "21.97%",
    width: "7.03%",
    top: "9.09%",
    right: "8.33%",
    bottom: "68.94%",
    left: "84.64%",
  },
  abc: {
    top: "79.55%",
    left: "5.21%",
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
    left: "44.27%",
  },
  profile: {
    left: "63.54%",
  },
  setting: {
    top: "52.27%",
    left: "79.95%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    width: "16.15%",
    height: "12.88%",
  },
  property1variant5: {
    top: 628,
    left: 20,
    width: 384,
    height: 132,
    position: "absolute",
  },
});

export default Property1Variant3;
