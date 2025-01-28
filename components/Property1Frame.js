import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Property1Frame = ({
  prop,
  eye,
  eyeSlash,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propRight,
  propBottom,
  propMarginTop,
  propWidth1,
  propHeight1,
  propOverflow,
  onPressEye,
  showPassword,
}) => {
  const property1Frame4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propRight,
    propBottom,
    propMarginTop,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const eyeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("overflow", propOverflow),
    };
  }, [propHeight1, propOverflow]);

  return (
    <View style={[styles.property1frame4, property1Frame4Style]}>
      <Text style={[styles.text, textStyle]}>
        {showPassword ? prop : prop.replace(/./g, "*")}
      </Text>
      <TouchableOpacity onPress={onPressEye}>
        <Image
          style={[styles.eyeIcon, eyeIconStyle]}
          source={showPassword ? eyeSlash : eye}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 296,
    height: 21,
  },
  eyeIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  property1frame4: {
    position: "absolute",
    top: 84,
    left: 20,
    width: 328,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default Property1Frame;
