import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NBchartsColumnChats = ({
  propWidth,
  propTop,
  propWidth1,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
  propLeft5,
}) => {
  const nBchartsColumnChatsStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth1),
    };
  }, [propTop, propWidth1]);

  const horizontalLinesIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const verticalLinesIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const leftTextStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  const bottomTextStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft3),
    };
  }, [propLeft3]);

  const columns1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft4),
    };
  }, [propLeft4]);

  const texts1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft5),
    };
  }, [propLeft5]);

  return (
    <View style={[styles.nbchartsColumnchats, nBchartsColumnChatsStyle]}>
      <View style={[styles.nbchartsColumnchatsChild, rectangleViewStyle]} />
      <Image
        style={[
          styles.horizontalLinesIcon,
          styles.texts1Position,
          horizontalLinesIconStyle,
        ]}
        contentFit="cover"
        source={require("../assets/horizontal-lines1.png")}
      />
      <Image
        style={[styles.verticalLinesIcon, verticalLinesIconStyle]}
        contentFit="cover"
        source={require("../assets/vertical-lines1.png")}
      />
      <View style={[styles.leftText, leftTextStyle]}>
        <Text style={[styles.text, styles.textTypo2]}>0</Text>
        <Text style={[styles.text1, styles.textTypo1]}>25</Text>
        <Text style={[styles.text2, styles.textTypo1]}>50</Text>
        <Text style={[styles.text3, styles.textTypo1]}>75</Text>
        <Text style={[styles.text4, styles.textTypo2]}>100</Text>
      </View>
      <View style={[styles.bottomText, bottomTextStyle]}>
        <Text style={[styles.photoshop, styles.textTypo]}>Photoshop</Text>
        <Text style={[styles.illustrator, styles.textTypo]}>Illustrator</Text>
        <Text style={[styles.xd, styles.textTypo]}>Xd</Text>
      </View>
      <View style={[styles.columns1, columns1Style]}>
        <View style={[styles.view, styles.viewPosition]} />
        <View style={[styles.view1, styles.view1Position]} />
        <View style={[styles.view2, styles.view2Position]} />
      </View>
      <View style={[styles.texts1, styles.texts1Position, texts1Style]}>
        <Text style={[styles.text5, styles.viewPosition]}>40</Text>
        <Text style={[styles.text6, styles.view1Position]}>88</Text>
        <Text style={[styles.text7, styles.view2Position]}>60</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  texts1Position: {
    top: 8,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo1: {
    left: 7,
    textAlign: "right",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  viewPosition: {
    top: 82,
    left: 0,
    position: "absolute",
  },
  view1Position: {
    left: 103,
    top: 0,
    position: "absolute",
  },
  view2Position: {
    left: 206,
    top: 48,
    position: "absolute",
  },
  nbchartsColumnchatsChild: {
    top: 6,
    backgroundColor: Color.colorWhite,
    height: 190,
    left: 0,
    position: "absolute",
    width: 367,
  },
  horizontalLinesIcon: {
    left: 52,
    width: 309,
    height: 169,
  },
  verticalLinesIcon: {
    top: 7,
    left: 53,
    width: 308,
    height: 170,
    position: "absolute",
  },
  text: {
    top: 169,
    left: 14,
  },
  text1: {
    top: 127,
  },
  text2: {
    top: 85,
  },
  text3: {
    top: 42,
  },
  text4: {
    top: 0,
    left: 0,
  },
  leftText: {
    left: 21,
    width: 21,
    height: 183,
    top: 0,
    position: "absolute",
  },
  photoshop: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  illustrator: {
    left: 107,
    top: 0,
    position: "absolute",
  },
  xd: {
    left: 228,
    top: 0,
    position: "absolute",
  },
  bottomText: {
    top: 183,
    left: 75,
    width: 243,
    height: 14,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorMediumslateblue,
    height: 68,
    width: 20,
  },
  view1: {
    backgroundColor: Color.colorDarkorange_200,
    width: 20,
    height: 150,
  },
  view2: {
    backgroundColor: Color.colorBlueviolet_200,
    height: 102,
    width: 20,
  },
  columns1: {
    top: 27,
    left: 94,
    width: 226,
    height: 150,
    position: "absolute",
  },
  text5: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  text6: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  text7: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  texts1: {
    left: 97,
    width: 220,
    height: 96,
  },
  nbchartsColumnchats: {
    height: 197,
    width: 367,
  },
});

export default NBchartsColumnChats;
