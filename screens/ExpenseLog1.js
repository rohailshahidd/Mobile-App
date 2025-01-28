import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Nav1 from "../components/Nav1";
import Property1Variant2 from "../components/Property1Variant2";
import ExpenselogComp from "../components/ExpenselogComp";
import Nav from "../components/Nav";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ExpenseLog1 = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const navigation = useNavigation(); // Get the navigation object

  const handleNavigate = () => {
    navigation.navigate("InputExpenses",{userId}); // Navigate to InputExpenses screen
  };
  return (
    <ImageBackground
      style={styles.expenselogIcon}
      resizeMode="cover"
      source={require("../assets/inputexpenses1.png")}
    >
      <Image
        style={styles.expenselogChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.expenselogItem}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Text style={styles.expensesLog}>Expenses Log</Text>
      <TouchableOpacity onPress={handleNavigate}>
      <Property1Variant2
        propTop={42}
        propLeft={188}
        propBackgroundColor="#d9d9d9"
        propColor="#f77a06"
      />
      </TouchableOpacity>
      <View style={styles.expenselogFrame}>
        <ExpenselogComp showText={false} showContent1 showContent11 />
      </View>
      <Nav1 
       userid = {userId}
       propTop={705} 
       />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  expenselogChild: {
    top: 35,
    left: 0,
    width: 59,
    height: 100,
    position: "absolute",
  },
  expenselogItem: {
    top: 0,
    left: 29,
    width: 105,
    height: 58,
    position: "absolute",
  },
  expensesLog: {
    top: 155,
    left: 119,
    fontSize: FontSize.size_6xl,
    lineHeight: 33,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  expenselogFrame: {
    top: 305,
    left: 16,
    width: 343,
    height: 325,
    position: "absolute",
  },
  expenselogIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ExpenseLog1;
