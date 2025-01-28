import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Property1Default = () => {
  return (
    <View style={styles.property1default}>
      <View style={styles.categoryParent}>
        <Text style={styles.category}>Category</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 88,
    height: 23,
  },
  frameChild: {
    width: 36,
    height: 27,
    marginLeft: 128,
  },
  categoryParent: {
    height: "71.83%",
    width: "97.06%",
    top: "0%",
    right: "2.94%",
    bottom: "28.17%",
    left: "0%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  property1default: {
    top: 20,
    left: 20,
    width: 272,
    height: 71,
    position: "absolute",
  },
});

export default Property1Default;
