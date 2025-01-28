import React, { useState, useEffect } from "react";
import Nav1 from "../components/Nav1";
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Frame = ({ route }) => {
  const { userId } = route.params;
  console.log(userId);
  const navigation = useNavigation();
  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    fetchMaintenanceData();
  }, []);

  const fetchMaintenanceData = async () => {
    try {
      const response = await axios.get(`http://ip:port/api/get-maintenance?userId=${userId}`);
      setMaintenanceData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching maintenance data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.8.100:3000/api/delete-maintenance/${id}`);
      fetchMaintenanceData(); // Refresh maintenance data after deletion
    } catch (error) {
      console.error("Error deleting maintenance data:", error);
    }
  };
  const handleAddEntry = () => {
    navigation.navigate('IPhone1415ProMax',{userId}); // Navigate to the "AddEntry" page
  };

  return (
    <View style={styles.container}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View
        style={[styles.iphone1415ProMax1Wrapper, styles.frameParentFlexBox]}
      >
        <View style={styles.iphone1415ProMax1}>
          <Image
            style={styles.img43731Icon}
            contentFit="cover"
            source={require("../assets/img-4373-1.png")}
          />
          <View style={styles.iphone1415ProMax1Child} />
          <Image
            style={[styles.iphone1415ProMax1Item, styles.iphone1415Layout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.iphone1415ProMax1Inner, styles.iphone1415Layout]}
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
          <Text style={[styles.maintenanceHistory, styles.textTypo]}>
            Maintenance History
          </Text>
      <ScrollView horizontal={true}>
       <ScrollView nestedScrollEnabled={true}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.headerCell}>Interval</Text>
            <Text style={styles.headerCell}>Type</Text>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Action</Text>
          </View>
          {maintenanceData.map((item) => (
            <View key={item._id} style={styles.tableRow}>
              <Text style={styles.cell}>{item.inputText}</Text>
              <Text style={styles.cell}>{item.dropdownValue}</Text>
              <Text style={styles.cell}>{item.inputText1}</Text>
              <TouchableOpacity onPress={() => handleDelete(item._id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        </ScrollView>
      </ScrollView>
      <TouchableOpacity style={styles.addEntryButton} onPress={handleAddEntry}>
       <Text style={styles.addEntryButtonText}>Add Entry</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
<Nav1 
       userid = {userId}
       propTop={705} 
       />
</View>
  );
};
const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    flex: 1,
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
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  img43731Icon: {
    top: -573,
    left: -334,
    width: 1047,
    height: 1861,
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    top: -3,
    left: 33,
    backgroundColor: Color.colorDarkorange_100,
    width: 397,
    height: 49,
    position: "absolute",
  },
  iphone1415ProMax1Item: {
    top: 0,
    left: -121,
  },
  iphone1415ProMax1Inner: {
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
  },
  maintenanceHistory: {
    top: 260,
    left: 60,
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    width: 345,
    height: 54,
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    height: 812,
    overflow: "hidden",
    flex: 1,
  },
  iphone1415ProMax1Wrapper: {
    zIndex: 0,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    borderColor: Color.colorBlack,
    marginTop: 310,// Limit table height to fit the screen
    marginLeft:85,
    maxHeight:300,
    width: 500,
    flexGrow: 1, // Allow the table to expand vertically based on content
    // flexDirection: "column",
    overflow: "scroll",
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: Color.colorBlack,
    alignItems: 'center', // Align items vertically in rows
  },
  headerCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Color.colorDarkorange_100,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: "center",
    backgroundColor: Color.colorWhite,
  },
  deleteButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: Color.colorRed,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  deleteButtonText: {
    color: Color.colorRed,
    fontFamily: FontFamily.interBold,
    
  },
  frameParent: {
    width: "100%",
  },
  addEntryButton: {
    backgroundColor: Color.colorDarkorange_100, // Vibrant color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30, // Rounded corners
    alignSelf: 'center', // Center align the button
    marginBottom: 200,
    shadowColor: '#000',
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
  addButtonText: {
    marginBottom:350,
    marginLeft: 40,
  }
});

export default Frame;
