import React, { useState } from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Property1Component from "../components/Property1Component";
import Property1Frame from "../components/Property1Frame";
import Nav1 from "../components/Nav1";
import Property1Default from "../components/Property1Default";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import axios from 'axios';


const FrameScreen = () => {
  return (
    <View>
      <Text>This is the Frame screen</Text>
    </View>
  );
};

const IPhone1415ProMax = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const SERVER_URL = 'http://192.168.8.100:3000';
  const SAVE_MAINTENANCE_URL = `${SERVER_URL}/api/save-maintenance`;
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const [dropdownValue, setDropdownValue] = useState();
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [component3Open, setComponent3Open] = useState(false);
  const [component3Items, setComponent3Items] = useState([
    { value: "Oil Change", label: "Oil Change" },
    { value: "Car Wash", label: "Car Wash" },
    { value: "PPF", label: "PPF" },
    { value: "Tuning", label: "Tuning" },
    { value: "Alignment", label: "Alignment" },
  ]);
  const [isValidDate, setIsValidDate] = useState(true);
  function validateDate(dateString) {
    const dateFormatRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    
    // Check if the date string matches the format
    if (!dateFormatRegex.test(dateString)) {
      console.log("Date format is incorrect.");
      return false; // Invalid format
    }
    
    // Extract date parts from the date string
    const [day, month, year] = dateString.split('/').map(num => parseInt(num, 10));
    
    // Construct a new Date object from the extracted parts
    // Note: Month is 0-indexed in JavaScript Date, so subtract 1
    const enteredDate = new Date(year, month - 1, day);
    
    // Get today's date with cleared time components for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    // Check if the entered date is before today's date
    if (enteredDate < today) {
      console.log("Entered date is before today's date.");
      return false; // Date is before today
    }
    
    console.log("Date is valid.");
    return true; // Date is valid
  }
   // Handler function to update input text
   const handleInputChange = (text) => {
    setInputText(text);
  };

  // Handler function to handle dropdown value change
  const handleDropdownChange = (item) => {
    setDropdownValue(item.value);
  };
    // Handler function to navigate to another page
    const handleSaveButtonPress = () => {
      // Check if the input date is valid
      const isValid = validateDate(inputText1);
      setIsValidDate(isValid);
      console.log(isValid);
    
      if (isValid) {
        // Date is valid, proceed with saving
        axios.post(SAVE_MAINTENANCE_URL, { userId, inputText, inputText1, dropdownValue })
          .then(response => {
            console.log(response.data);
            setInputText("");
            setInputText1("");
            setDropdownValue("");
            // Provide feedback indicating successful save
            console.log("Maintenance data saved successfully.");
            // Navigate to another screen
            navigation.navigate('Frame',{userId});
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
      } else {
        // Date is invalid, clear input and provide feedback to the user
        setInputText1("");
        // Provide feedback indicating invalid date
        console.log("Please enter a valid date in the format DD/MM/YYYY.");
      }
    };
    
  
    const handleTextChange = (text) => {
      setInputText1(text);
    };


  return (
    <View style={styles.iphone1415ProMax2}>
      <Image
        style={styles.img43731Icon}
        contentFit="cover"
        source={require("../assets/img-4373-1.png")}
      />
      <View style={styles.iphone1415ProMax2Child} />
      <Image
        style={[styles.iphone1415ProMax2Item, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax2Inner, styles.iphone1415Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.signalIcon}
        contentFit="cover"
        source={require("../assets/signal.png")}
      />
      <Image
        style={[styles.batteryFullIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/batteryfull.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>9:47</Text>
      <Text style={[styles.addeditReminder, styles.textTypo]}>
        Add/Edit Reminder
      </Text>
      <TextInput
        style={styles.input}
        value={inputText} // This references the inputText state variable
        onChangeText={setInputText}
        placeholder="Interval"
      />
      <TextInput
        style={styles.input1}
        value={inputText1} // This references the inputText state variable
        onChangeText={handleTextChange}
        placeholder="Date: DD/MM/YYYY"
      />
     <DropDownPicker
      open={component3Open}
      value={dropdownValue}
      items={component3Items}
      setOpen={setComponent3Open}
      setValue={setDropdownValue}
      setItems={setComponent3Items}
      placeholder="Maintenance Task Selection"
      onChangeItem={handleDropdownChange} // Update this line
      />
      <TouchableOpacity style={styles.addEntryButton} onPress={handleSaveButtonPress}>
       <Text style={styles.addEntryButtonText}>Save</Text>
      </TouchableOpacity>

     {/* <Property1Component
        property1Component1Position="absolute"
        property1Component1Width={337}
        property1Component1Height={70}
        property1Component1Top={406}
        property1Component1Left={17}
        rectangleViewPosition="unset"
        rectangleViewHeight="unset"
        rectangleViewWidth="unset"
        rectangleViewTop="unset"
        rectangleViewRight="unset"
        rectangleViewBottom="unset"
        rectangleViewLeft="unset"
        rectangleViewBackgroundColor="unset"
      />
      <Property1Frame
        property1Frame289Position="absolute"
        property1Frame289Width={345}
        property1Frame289Height={65}
        property1Frame289Top={314}
        property1Frame289Left={17}
      /> */}

      <Nav1 
       userid = {userId}
       propTop={705} 
       />
      <View style={styles.table} />
      <Property1Default
        buttonText="Back"
        property1DefaultPosition="absolute"
        property1DefaultTop={741}
        property1DefaultLeft={42}
        property1DefaultWidth={360}
        backFlex={1}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  component3Value: {
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  iphone1415Layout: {
    height: 200,
    width: 200,
    position: "absolute",
  },
  iconPosition: {
    top: 19,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  img43731Icon: {
    top: -573,
    left: -334,
    width: 1047,
    height: 1861,
    position: "absolute",
  },
  iphone1415ProMax2Child: {
    top: -3,
    left: 33,
    backgroundColor: Color.colorDarkorange_100,
    width: 397,
    height: 49,
    position: "absolute",
  },
  iphone1415ProMax2Item: {
    top: 0,
    left: -121,
  },
  iphone1415ProMax2Inner: {
    top: -104,
    left: -9,
  },
  signalIcon: {
    top: 17,
    left: 304,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  batteryFullIcon: {
    left: 371,
  },
  wifiIcon: {
    left: 337,
  },
  text: {
    top: 22,
    left: 46,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  addeditReminder: {
    top: 244,
    left: 51,
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    width: 345,
    height: 54,
    textAlign: "left",
  },
  table: {
    width: 782,
    height: 281,
  },
  iphone1415ProMax2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  inputContainer: {
    paddingHorizontal: 20, // Add horizontal padding for space from borders
    marginTop: 20, // Add top margin for space from the previous content
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 300, // Add bottom margin for spacing between input and dropdown
    marginBottom: 30,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    maxWidth:200,
    paddingVertical: 10, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
    marginTop: 50, // Add bottom margin for spacing between dropdown and button
  },
  saveButton: {
    backgroundColor: "white",
    color: "blue",
    padding: 10,
    maxWidth:50,
    maxHeight:200,
    marginTop: 100,
    borderRadius: 5,
    marginLeft:200,
    textAlign: "center",
  },
  input1: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10, // Add bottom margin for spacing between input and dropdown
    marginBottom: 30,
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  addEntryButton: {
    backgroundColor: Color.colorDarkorange_100, // Vibrant color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30, // Rounded corners
    alignSelf: 'center', // Center align the button
    marginBottom: 100,
    shadowColor: '#000',
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  addEntryButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg, // Larger font size
    textAlign: 'center',
  }, 
});
export default IPhone1415ProMax;
