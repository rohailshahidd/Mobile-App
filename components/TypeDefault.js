import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeDefault = ({
  showContent,
  showText,
  typeDefaultAlignSelf,
  typeDefaultPosition,
  typeDefaultBackgroundColor,
  typeDefaultWidth,
  typeDefaultHeight,
  contentHeight,
  textFontSize,
  textLineHeight,
  textColor,
  textFontFamily,
  textFontWeight,
}) => {
  const typeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", typeDefaultAlignSelf),
      ...getStyleValue("position", typeDefaultPosition),
      ...getStyleValue("backgroundColor", typeDefaultBackgroundColor),
      ...getStyleValue("width", typeDefaultWidth),
      ...getStyleValue("height", typeDefaultHeight),
    };
  }, [
    typeDefaultAlignSelf,
    typeDefaultPosition,
    typeDefaultBackgroundColor,
    typeDefaultWidth,
    typeDefaultHeight,
  ]);

  const contentStyle = useMemo(() => {
    return {
      ...getStyleValue("height", contentHeight),
    };
  }, [contentHeight]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("color", textColor),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("fontWeight", textFontWeight),
    };
  }, [textFontSize, textLineHeight, textColor, textFontFamily, textFontWeight]);

  return (
    <View style={[styles.typedefault, typeDefaultStyle]}>
      {showContent && (
        <View style={[styles.content, contentStyle]}>
          {showText && <Text style={[styles.text, textStyle]} />}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
  },
  content: {
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  typedefault: {
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: 120,
    alignSelf: "stretch",
  },
});

export default TypeDefault;
