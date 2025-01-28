import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PopupComp = ({
  icon,
  propTop,
  propWidth,
  propLeft,
  propWidth1,
  propLeft1,
  propLeft2,
  propWidth2,
  onIconTimesPress,
}) => {
  const popupCompStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propWidth, propLeft]);

  const entryAddedSuccessfullyStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
      ...getStyleValue("left", propLeft1),
    };
  }, [propWidth1, propLeft1]);

  const iconTimesStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
      ...getStyleValue("width", propWidth2),
    };
  }, [propLeft2, propWidth2]);

  return (
    <View style={[styles.popupComp, popupCompStyle]}>
      <View style={[styles.popupCompChild, styles.iconLayout]} />
      <Text
        style={[styles.entryAddedSuccessfully, entryAddedSuccessfullyStyle]}
      >
        Entry Added Successfully
      </Text>
      <Pressable
        style={[styles.iconTimes, iconTimesStyle]}
        onPress={onIconTimesPress}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-times.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  popupCompChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorRoyalblue,
    position: "absolute",
  },
  entryAddedSuccessfully: {
    height: "58.33%",
    width: "66.41%",
    top: "20.83%",
    left: "8.72%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.jockeyOneRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconTimes: {
    left: "89.74%",
    top: "38.89%",
    right: "5.64%",
    bottom: "43.06%",
    width: "4.62%",
    height: "18.06%",
    position: "absolute",
  },
  popupComp: {
    top: 0,
    left: 0,
    width: 390,
    height: 72,
    position: "absolute",
  },
});

export default PopupComp;
