import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Property1Variant1 from "../components/Property1Variant1";
import Bar from "../components/Bar";
import Nav2 from "../components/Nav2";
import { FontFamily, Color } from "../GlobalStyles";
import Newcomponent1 from "../components/Newcomponent1";
import PropComp from "../components/propcomp";
import * as DocumentPicker from 'expo-document-picker';

const Profile = ({ route }) => {
  const { userId } = route.params;
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.cancelled) {
        const formData = new FormData();
        formData.append('filer', {  // Ensure 'filer' matches the server expectation
          uri: result.uri,
          name: result.name,
          type: result.type ?? 'application/octet-stream',
        });
  
        const response = await fetch('http://ip:port/upload', {
          method: 'POST',
          body: formData,
          // Do not set 'Content-Type': 'multipart/form-data' manually
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(await response.text());
      } else {
        alert('No document selected');
      }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };  
  

  // Fetch user information when component mounts
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        const userData = await response.json();
        setUserInfo(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserInfo();
  }, [userId]); // Fetch user info whenever userId changes

  return (
    <View style={styles.profile}>
      <Image
        style={styles.img437311}
        contentFit="cover"
        source={require("../assets/img-4373-1-11.png")}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../mongo/public/p3rbox1.jpg")}
            />
            <Text style={styles.rohailShahid}>{userInfo ? userInfo.fullname : "Loading..."}</Text>
            <GroupComponent email="Name" abcgmailcom={userInfo ? userInfo.fullname : "Loading..."} />
            <GroupComponent email="Email" abcgmailcom={userInfo ? userInfo.email : "Loading..."} />
            <GroupComponent email="Phone" abcgmailcom={userInfo ? userInfo.phonenumber : "Loading..."} />
            <PropComp
              buttonText="Edit"
              propTop={580}
              propLeft={0}
              propBackgroundColor="#ff8a00"
              propBorderColor="#000"
              propBorderWidth={1}
              propWidth={360}
              onPress = {pickFile}
            />
            <Newcomponent1
              buttonText="Logout"
              propTop={640}
              propLeft={0}
              propBackgroundColor="#ff8a00"
              propBorderColor="#000"
              propBorderWidth={1}
              propWidth={360}
              navigationDestination="Login"
            />
          </View>
        </View>
        {/* Add some extra area to scroll */}
        <View style={styles.extraScrollArea} />
      </ScrollView>
      <Bar />
      <Nav2 userid={userId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100, // Adjust the paddingBottom to increase the extra area
  },
  content: {
    alignItems: "center",
  },
  img437311: {
    width: 375,
    height: 812,
    position: "absolute",
    zIndex: -1,
  },
  frameChild: {
    width: 160,
    height: 160,
    borderRadius: 80, // Half of width and height
  },
  
  rohailShahid: {
    fontSize: 32,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 288,
    height: 44,
    marginTop: 26,
  },
  frameItem: {
    backgroundColor: Color.colorDarkorange_100,
    width: 352,
    height: 48,
    marginTop: 26,
  },
  ellipseParent: {
    top: 67,
    left: -1,
    alignItems: "center",
  },
  profile: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 812,
  },
  extraScrollArea: {
    height: 300, // Adjust the height to increase the extra area
  },
});

export default Profile;
