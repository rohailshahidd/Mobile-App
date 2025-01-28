import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPasswordText = () => {
  return <Text style={styles.forgotPassword}>Forgot Password?</Text>;
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorDarkorange_300,
    textAlign: "center",
    width: 328,
    height: 18,
  },
});

export default ForgotPasswordText;
