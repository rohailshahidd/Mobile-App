import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import Nav1 from "../components/Nav1";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";




const Notifications = ({route}) => {
    const { userId } = route.params;
    console.log(userId);
    const [showNotifications, setShowNotifications] = useState(true);
  
    const handleImagePress = () => {
      // If cards are already displayed, do nothing
      if (showNotifications) {
        return;
      } 
      // Otherwise, display the cards
      setShowNotifications(true);
    };
  
    const handleImagePress1 = () => {
      // If cards are already hidden, do nothing
      if (!showNotifications) {
        return;
      }
      // Otherwise, hide the cards
      setShowNotifications(false);
    };

    const [data, setData] = useState([]); // Initialize an empty array

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://ip:port/maintains/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const dataArray = await response.json();
          const mydata = dataArray.slice(0, 3);
          console.log(mydata);
          setData(mydata);
        } catch (error) {
          console.error('Error fetching or processing data:', error);
        }
      };
      fetchData();
    }, [userId]);

  return (
    <View style={styles.mar}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ImageBackground
          style={styles.notificationsIcon}
          resizeMode="cover"
          source={require("../assets/img-4373-1-1.png")}
        >
        <Image
        style={styles.shapesIcon}
        contentFit="cover"
        source={require("../assets/shapes.png")}
      />
          <Text style={[styles.notifications, styles.textTypo]}>
            {" "}
            Notifications
          </Text>
          <View style={[styles.frameParent, styles.frameParentPosition]}>
            {showNotifications && (
              <View>
                {data.map((item, index) => (
                  <View key={index}>
                    <View
                      style={[
                        styles.act,
                        styles.acti,
                      ]}
                    >
                      <Text style={styles.containerTypo}>
                        <Text style={styles.plugsCheckIns}>
                          {item.dropdownValue}
                        </Text>
                        <Text style={styles.text4}>
                          <Text style={styles.text2}>{`        -->     `}</Text>
                          <Text style={styles.alBilalMotors1}>
                            {item.inputText1}{" "}
                          </Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.yt}></View>
                  </View>
                ))}
              </View>
            )}
            <View style={styles.butoon}>
              <TouchableOpacity onPress={handleImagePress}>
                <View style={styles.frameChild} />
              </TouchableOpacity>
              <Text style={styles.reset}>Enable Notifications</Text>
            </View>

            <View style={styles.butoon}>
              <TouchableOpacity onPress={handleImagePress1}>
                <View style={styles.frameChild} />
              </TouchableOpacity>
              <Text style={styles.reset}>Disable Notification </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      {/* <Nav1 
       userid = {userId}
       propTop={705} 
       /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },


scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  notificationsIcon: {
    flex: 1,
    width: "100%",
    minHeight: '100%', // Ensure the background image covers the entire scrollable area
  },
  shapesIcon: {
    top: -111,
    left: -100,
    width: 536,
    height: 287,
    position: "absolute",
  },
 yt:{
    height:20,
 },
 
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
 
  acti: {
    justifyContent: "center",
    flexDirection: "row",
    width: 331,
    right:9,
  
    
    padding: Padding.p_3xs,
    alignItems: "center",
  },


  
  act: {
    padding:133,
    height: 100,
    justifyContent: "center",
    flexDirection: "row",
    width: 361,
    left:15,
   
  },


  containerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    
  },
 

  text: {
    top: 30,
    left: 20,
    width: 73,

    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },

  notifications: {
    top: 155,
    fontSize: FontSize.size_17xl,
    width: 244,
    height: 41,

    color: Color.colorWhite,
    left: 65,
    position: "absolute",
  },
  plugsCheckIns: {
    fontSize: 23,
    color: Color.colorBlack,
    backgroundColor: Color.colorDarkorange_100,
  },
  text1: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  due: {
    color: Color.colorCrimson,
    fontSize: FontSize.size_xl,
  },
  alBilalMotors1: {
    fontSize: 18,
    color: Color.colorBlack,
    backgroundColor: Color.colorDarkorange_100,
  },
  alBilalMotors: {
    fontSize: FontSize.size_base,
  },
  text2: {
    color: Color.colorWhite,
    fontSize: 18,
    
  },
  text4: {
    fontSize: FontSize.size_sm,
  },
 
 

  
  frameChild: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 335,
    height: 48,
    left:5,
    backgroundColor: Color.colorDarkorange_100,
  },
 
  reset: {
    height: "72.09%",
    width: "80.13%",
    top: "8.12%",
    left: "16.47%",
    right: "8.47%",
    fontSize: FontSize.size_5xl,
    zIndex: 1,
    fontFamily: FontFamily.poppinsExtraBold,
    fontWeight: "800",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  butoon: {
    width: 308,
    height: 96,
    marginTop: 20,
    marginBottom:-60,
  },
 
  frameParent: {
    top: 251,
    alignItems: "center",
  },


 
 
 
 
  notificationsIcon: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Notifications;


