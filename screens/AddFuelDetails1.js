import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, } from "react-native";
import Property1Variant from "../components/Property1Variant";
import DateComp from "../components/DateComp";
import Nav1 from "../components/Nav1";
import QuantityComp from "../components/QuantityComp";
import PriceComp from "../components/PriceComp";
import OdometerComp from "../components/OdometerComp";
import Nav from "../components/Nav";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
import { Alert } from 'react-native';

const AddFuelDetails1 = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const navigation = useNavigation();
  const dateRef = useRef();
  const quantityRef = useRef();
  const priceRef = useRef();
  const odometerRef = useRef();


  const validateDate = (dateString) => {
    const dateFormatRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/;
    if (!dateFormatRegex.test(dateString)) {
      console.log("Date format is incorrect.");
      return false;
    }

    const [month, day, year] = dateString.split('/').map(num => parseInt(num, 10));
    const enteredDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (enteredDate > today) {
      console.log("Entered date is after today's date.");
      return false;
    }

    console.log("Date is valid.");
    return true;
  };

  const resetForm = () => {
    dateRef.current.reset();
    quantityRef.current.reset(); // Add reset method to QuantityComp
    priceRef.current.reset(); // Add reset method to PriceComp
    odometerRef.current.reset();
  };

  const handleSubmit = async () => {
    const date = dateRef.current.getData();
    const quantity = quantityRef.current.getData();
    const price = priceRef.current.getData();
    const odometer = odometerRef.current.getData();

    if (!quantity || !price || !odometer) {
      Alert.alert("Missing Information", "Please ensure all fields are filled.");
      return;
    }
    
    if (!date || !validateDate(date)) {
      Alert.alert("Invalid Date", "Please enter a valid date in the format MM/DD/YYYY and ensure it is not after today's date.");
      dateRef.current.reset();
      return;
    }

    const fuelData = {
      userId,
      date,
      quantity,
      price,
      odometer
    };

    try {
      const response = await fetch('http://ip:port/fuels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fuelData)
      });
      if (!response.ok) {
        throw new Error('Failed to save fuel details');
      }
      const responseData = await response.json();
      // Success: navigate and show alert
      Alert.alert('Success', 'Fuel details saved successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('FuelDetailsMSg3', { userId }) }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

 useEffect(() => {
    // Reset form when component mounts (initial render)
    resetForm();
  }, []);

  // Navigation event listener to reset form when navigating to the form page
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetForm();
    });
    return unsubscribe;
  }, [navigation]);


  return (
    <ImageBackground
      style={styles.addFuelDetails}
      resizeMode="cover"
      source={require("../assets/inputexpenses1.png")}
    >
      <Image
        style={styles.addFuelDetailsChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Property1Variant
        propTop={684}
        propLeft={121}
        propBackgroundColor="#d9d9d9"
        propColor="#000"
        onPress={handleSubmit}
      />

      <DateComp
        dDMMYYYY="DD/MM/YYYY"
        date="Date"
        propTop={462}
        propLeft={76}
        propLeft1="4.23%"
        ref={dateRef}
      />
      <OdometerComp
        quantity="Odometer Reading"
        propTop={347}
        propLeft={70}
        propLeft1="3.45%"
        ref={odometerRef}
      />
      <PriceComp
        price="Price Per Unit"
        propTop={229}
        propLeft={70}
        propLeft1="3.45%"
        ref={priceRef}
      />
      <QuantityComp
        quantity="Quantity"
        propTop={111}
        propLeft={70}
        propLeft1="3.45%"
        ref={quantityRef}
      />
      <View style={[styles.title, styles.titleLayout]}>
        <Text style={[styles.addFuelDetails1, styles.addPosition]}>
          Add Fuel Details
        </Text>
      </View>
      <Image
        style={[styles.addFuelDetailsItem, styles.addPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Nav1 
       userid = {userId}
       propTop={705} 
       />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleLayout: {
    height: 36,
    width: 216,
  },
  addPosition: {
    top: 0,
    position: "absolute",
  },
  addFuelDetailsChild: {
    top: 21,
    left: 1,
    width: 59,
    height: 100,
    position: "absolute",
  },
  addFuelDetails1: {
    left: 0,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.2,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorIvory,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    height: 36,
    width: 216,
  },
  title: {
    top: 58,
    left: 93,
    position: "absolute",
  },
  addFuelDetailsItem: {
    left: 46,
    width: 105,
    height: 58,
  },
  addFuelDetails: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AddFuelDetails1;
