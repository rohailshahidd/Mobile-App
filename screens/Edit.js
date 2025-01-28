import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Group from "../components/Property1Group";
import Bar from "../components/Bar";
import Nav1 from "../components/Nav1";
import { Color } from "../GlobalStyles";

const Edit = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);

  return (
    <View style={styles.edit}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-11.png")}
      />
      <Property1Group
        abc="Expenses"
        property1Group13Position="absolute"
        property1Group13Top={100}
        property1Group13Left={5}
        property1Group13Right={null} // Add right prop as null
        property1Group13Width={180}
        property1Group13Height={100}
        navigationPage="ExpenseLog1"
        userid={userId}
      />
      <Property1Group
        abc="Maintenance"
        property1Group13Position="absolute"
        property1Group13Top={205}
        property1Group13Left={5}
        property1Group13Right={null} // Add right prop as null
        property1Group13Width={180}
        property1Group13Height={100}
        navigationPage="Frame"
        userid={userId}
      />
      <Property1Group
        abc="Fuel"
        property1Group13Position="absolute"
        property1Group13Top={100}
        property1Group13Left={190}
        property1Group13Right={null} // Add right prop as null
        property1Group13Width={180}
        property1Group13Height={100}
        navigationPage="FuelDetailsMSg3"
        userid={userId}
      />
      <Property1Group
        abc="Service History"
        property1Group13Position="absolute"
        property1Group13Top={205}
        property1Group13Left={190}
        property1Group13Right={null} // Add right prop as null
        property1Group13Width={180}
        property1Group13Height={100}
        navigationPage="Frame1"
        userid={userId}
      />
      <Bar />
      <Nav1 userid={userId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  img437311: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  edit: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Edit;
