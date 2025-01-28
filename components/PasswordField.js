import React, { useState, forwardRef, useImperativeHandle, useMemo } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return undefined;
  return { [key]: value === "unset" ? undefined : value };
};

const PasswordField = forwardRef(
  (
    {
      placeholder,
      propTop,
      propLeft,
      propWidth,
      propHeight,
      propRight,
      propBottom,
      propBorderWidth,
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [text, setText] = useState(""); // State to store the text input value

    const passwordFieldStyle = useMemo(() => {
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

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    useImperativeHandle(ref, () => ({
      getData: () => text,
      reset: () => setText(""),
    }));

    return (
      <View style={[styles.passwordField, passwordFieldStyle]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Image
            source={isPasswordVisible ? require("../assets/vector.png") : require("../assets/eyeslash.png")}
            style={styles.eye}
          />
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  passwordField: {
    position: "relative",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  eyeIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  eye: {
    width: 24, // Adjust width and height as needed
    height: 24, // Adjust width and height as needed
  },
});

export default PasswordField;
