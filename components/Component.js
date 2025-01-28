
import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Property1Default from "./Property1Default";
import Property1Frame from "./Property1Frame";
import Property2Password from "./Property2Password";

const Component = ({ propTop, propLeft }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("");

  const component6Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const handleChangeText = (inputText) => {
    setText(inputText);
  };

  const handleEyeClick = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={[styles.component6, component6Style]}>
      <Property2Password
        emailAddressLabel="Email Address"
        showEmailAddress={true}
        propTop="10%"
        propLeft="10%"
        propWidth="80%"
        propHeight="50%"
        propRight="10%"
        propBottom="10%"
        propBorderWidth={1}
        onChangeText={handleChangeText}
      />
      <Property1Frame
        prop={text} 
        eye={require("../assets/vector.png")}
        eyeSlash={require("../assets/eyeslash.png")}
        propMarginTop="unset"
        propWidth1={294}
        propHeight1={17}
        propOverflow="unset"
        onPressEye={handleEyeClick}
        showPassword={showPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component6: {
    position: "absolute",
    top: 443,
    left: 10,
    width: 358,
    height: 46,
  },
});

export default Component;
