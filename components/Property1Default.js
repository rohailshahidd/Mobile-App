import React, { useState, forwardRef, useImperativeHandle, useMemo } from "react";
import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Border, Color, FontSize, FontFamily,Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Property1Default = forwardRef(({
  emailAddressLabel,
  showEmailAddress,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propRight,
  propBottom,
  propBorderWidth,
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(""); 

  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      borderWidth: propBorderWidth,
    };
  }, [
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propRight,
    propBottom,
    propBorderWidth,
  ]);

  const handleChangeText = (inputText) => {
    setText(inputText);
    return inputText;
  };

  useImperativeHandle(ref, () => ({
    getData: () => text,
    reset: () => setText(""),
  }));

  const handlePress = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.property1default, property1DefaultStyle]}>
        {showEmailAddress && !isFocused && text === "" && (
          <Text style={styles.emailaddress}>{emailAddressLabel}</Text>
        )}
        {(isFocused || text !== "") && (
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleChangeText}
            onBlur={handleBlur}
            autoFocus={isFocused}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});  

const styles = StyleSheet.create({
  emailaddress: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 328,
  },
  property1default: {
    position: "absolute",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    padding: 0,
  },
});

export default Property1Default;
