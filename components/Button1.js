import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1ButtonHov from "./Property1ButtonHov";

const Button1 = () => {
  return (
    <View style={styles.button}>
      <Property1ButtonHov
        propTop={20}
        propBackgroundColor="#000"
        propLeft={20}
        propWidth={97}
        propColor="#202020"
      />
      <Property1ButtonHov />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 137,
    height: 138,
    overflow: "hidden",
  },
});

export default Button1;
