import * as React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ForgotPassword1 = () => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const handlePressIn = () => {
    setIsHighlighted(true);
  };

  const handlePressOut = () => {
    setIsHighlighted(false);
  };

  const forgotPasswordStyle = {
    ...styles.forgotPassword,
    ...(isHighlighted && styles.highlightedForgotPassword),
  };

  return (
    <View style={forgotPasswordStyle}>
      <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <View>
          <View style={[styles.property1default, styles.property1defaultLayout]}>
            <Text style={[styles.forgotPasswordText, styles.forgotPosition]}>
              Forgot Password?
            </Text>
          </View>
          <View style={[styles.property1variant2, styles.property1defaultLayout]}>
            <Text style={[styles.forgotPasswordText, styles.forgotPosition]}>
              Forgot Password?
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 18,
    width: 328,
    left: 20,
    position: "absolute",
  },
  forgotPosition: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  forgotPasswordText: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorDarkorange_300,
  },
  property1default: {
    top: 20,
  },
  property1variant2: {
    top: 58,
  },
  forgotPassword: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 368,
    height: 96,
    overflow: "hidden",
  },
  highlightedForgotPassword: {
    borderWidth: 2,
    borderColor: Color.colorDarkorange_300,
  },
});

export default ForgotPassword1;
