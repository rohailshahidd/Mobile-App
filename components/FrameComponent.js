import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <View style={[styles.windowClose, styles.checkLayout]} />
      <View style={[styles.check, styles.checkLayout]} />
      <Text style={styles.dataEnteredSuccessfully}>
        Data Entered Successfully
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Frame")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  checkLayout: {
    marginLeft: -11,
    overflow: "hidden",
    height: 25,
    backgroundColor: Color.colorGray_300,
    width: 25,
  },
  componentChild: {
    backgroundColor: Color.colorGainsboro,
    width: 337,
    height: 205,
    zIndex: 0,
  },
  windowClose: {
    zIndex: 1,
  },
  check: {
    zIndex: 2,
  },
  dataEnteredSuccessfully: {
    top: 89,
    left: 71,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 217,
    height: 11,
    zIndex: 3,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    left: 150,
    top: 136,
    height: 19,
    zIndex: 4,
    position: "absolute",
    width: 25,
  },
  rectangleParent: {
    width: 373,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
});

export default FrameComponent;
