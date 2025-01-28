import React, { useMemo, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Property1Group = ({
  abc,
  property1Group13Position,
  property1Group13Top,
  property1Group13Left,
  property1Group13Right,
  property1Group13Width,
  property1Group13Height,
  navigationPage,
  userid
}) => {
  const navigation = useNavigation(); // Initialize navigation object

  const [isHovered, setIsHovered] = useState(false);

  const property1Group13Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Group13Position),
      ...getStyleValue("top", property1Group13Top),
      ...getStyleValue("left", property1Group13Left),
      ...getStyleValue("width", property1Group13Width),
      ...getStyleValue("height", property1Group13Height),
      ...getStyleValue("userid", userid),

      borderRadius: 20, // Adjust border radius for more round edges
      backgroundColor: isHovered ? "white" : Color.colorDarkorange_100, // Change background color on hover
      shadowColor: isHovered ? "#884a00" : "transparent", // Change shadow color on hover
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: isHovered ? 0.25 : 0,
      shadowRadius: 3.84,
      elevation: isHovered ? 5 : 0, // Add elevation only on hover
      // Adjust right property if propRight is true
      ...(property1Group13Right && { right: 12 }), // Example value, adjust as needed
    };
  }, [
    property1Group13Position,
    property1Group13Top,
    property1Group13Left,
    property1Group13Right,
    property1Group13Width,
    property1Group13Height,
    isHovered,
  ]);

  const handleNavigation = () => {
    navigation.navigate(navigationPage,{ userId: userid }); // Navigate to the specified page
  };

  return (
    <TouchableOpacity onPress={handleNavigation}>
      <View
        style={[styles.property1group13, property1Group13Style]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <View style={styles.property1group13Child} />
        <Text style={styles.abc}>{abc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  property1group13Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  abc: {
    height: "24.37%",
    width: "91.86%",
    top: "34.45%",
    left: "4.65%",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  property1group13: {
    width: 100, // Fixed width
    height: 100, // Fixed height
  },
});

export default Property1Group;
