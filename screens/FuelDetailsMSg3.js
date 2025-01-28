import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Property1Variant2 from "../components/Property1Variant2";
import FuelEffComp from "../components/FuelEffComp";
import Nav1 from "../components/Nav1";
import Nav from "../components/Nav";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 

const FuelDetailsMSg3 = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const navigation = useNavigation(); 

const handleNavigate = () => {
    navigation.navigate("AddFuelDetails1", {userId}); // Navigate to InputExpenses screen
  };
  return (
    <ImageBackground
      style={styles.fueldetailsmsgIcon}
      resizeMode="cover"
      source={require("../assets/inputexpenses1.png")}
    >
      <Image
        style={styles.fueldetailsmsgChild}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={styles.fueldetailsmsgItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={styles.fuelEfficiency}>Fuel Efficiency</Text>
      <TouchableOpacity onPress={handleNavigate}>
      <Property1Variant2
        propTop={48}
        propLeft={187}
        propBackgroundColor="#d9d9d9"
        propColor="#f77a06"
      />
      </TouchableOpacity>
      <View style={styles.fuelEffFrame}>
        <FuelEffComp
          showContent
          showFuelID={false}
          showText
          showContent1
          showContent11
        />
      </View>
      <Nav1 
       userid = {userId}
       propTop={705} 
       />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fueldetailsmsgChild: {
    top: 0,
    left: 35,
    width: 105,
    height: 58,
    position: "absolute",
  },
  fueldetailsmsgItem: {
    top: 20,
    left: -7,
    width: 59,
    height: 100,
    position: "absolute",
  },
  fuelEfficiency: {
    top: 156,
    left: 106,
    fontSize: FontSize.size_6xl,
    lineHeight: 33,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  fuelEffFrame: {
    top: 279,
    left: 18,
    width: 339,
    height: 325,
    position: "absolute",
  },
  fueldetailsmsgIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FuelDetailsMSg3;
