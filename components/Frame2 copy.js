import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vectorParent}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Frame1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Text style={styles.dataEnteredSuccessfully}>
        Data Entered Successfully
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.windowClose} />
      <View style={styles.windowClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    height: 22,
    width: 25,
  },
  dataEnteredSuccessfully: {
    alignSelf: "stretch",
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    marginTop: 23,
  },
  vectorIcon: {
    height: 19,
    marginTop: 23,
    width: 25,
  },
  windowClose: {
    backgroundColor: Color.colorGray_300,
    height: 25,
    marginTop: 23,
    width: 25,
    overflow: "hidden",
  },
  vectorParent: {
    backgroundColor: Color.colorGainsboro,
    width: 411,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 26,
    overflow: "hidden",
  },
});

export default Frame2;
