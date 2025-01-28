import React, { useMemo, useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, TouchableWithoutFeedback } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Property2Password = ({
  emailAddressLabel,
  showEmailAddress,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propRight,
  propBottom,
  propBorderWidth,
  onChangeText,
}) => {
  const [text, setText] = useState(""); // State to store the text input value

  useEffect(() => {
    onChangeText(text); // Pass the updated text to the parent component
  }, [text, onChangeText]);

  const property2PasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("right", propRight),
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("borderWidth", propBorderWidth),
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
    setText(inputText); // Update text input value
  };

  return (
    <View style={[styles.property2Password, property2PasswordStyle]}>
      {showEmailAddress && ( // Show the text only if specified
        <Text style={styles.emailaddress}>{emailAddressLabel}</Text>
      )}
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        autoFocus={true} // Auto focus on text input when rendered
        secureTextEntry={true} // Hide the entered text
      />
      <Text style={styles.enteredText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailaddress: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 328,
  },
  property2Password: {
    position: "absolute",
    top: 19,
    left: 19,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
  },
  input: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0, // Hide the text input
  },
  enteredText: {
    position: "absolute",
    left: Padding.p_2xl,
    top: Padding.p_2xs,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
  },
});

export default Property2Password;