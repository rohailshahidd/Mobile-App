import * as React from "react";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Nav2 from "../components/Nav2";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TestH = () => {

  const navigation = useNavigation();
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.8.100:3000/Workshops");
        const data = await response.json();
        setWorkshops(data);
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    fetchData();
  }, []);

  // Assuming workshop data has a 'W_id' field
  const handleWorkshopPress = (workshopId) => {
      navigation.navigate("Max", { W_id: workshopId }); // Pass W_id instead of workshopIdr
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bckgrnd.png")}
        style={styles.backgroundImage}
      />
      <Text style={styles.heading}>Workshops</Text>
      {workshops.map((workshop, index) => (
        <Pressable
          key={index}
          style={[styles.button, styles.buttonLayout]}
          onPress={() => handleWorkshopPress(workshop.W_id)} // Use W_id here
        >
          <Text style={styles.workshopName}>{workshop.name}</Text>
          <View style={styles.ratingContainer}>
            <Image
              source={require("../assets/star.png")}
              style={styles.starIcon}
            />
            <Text style={styles.workshopRating}>{workshop.rating}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Image
              source={require("../assets/locationIcon.png")}
              style={styles.locationIcon}
            /> 
            <Text style={styles.workshopCity}>{workshop.city}</Text>
          </View>
        </Pressable>
      ))} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
  },
  heading: {
    fontSize: FontSize.size_5xl,
    fontWeight: "bold",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayout: {
    width: "80%",
  },
  workshopName: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  workshopRating: {
    fontSize: FontSize.size_md,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  workshopCity: {
    fontSize: FontSize.size_md,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
  },
});

export default TestH;
