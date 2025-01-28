import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";


const Max = () => {
 const navigation = useNavigation();
  const route = useRoute();
  const { W_id } = route.params;
  console.log({W_id});
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await fetch(`http://192.168.8.100:3000/Workshops/${W_id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWorkshop(data);
        } else {
          throw new Error("Invalid content type received");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshopDetails();
  }, [W_id]);

  if (loading) {
    return <Text>Loading workshop details...</Text>;
  }

  if (error) {
    return <Text>Error fetching workshop details: {error}</Text>;
  }

  if (!workshop) {
    return <Text>No workshop details found for W_id: {W_id}</Text>;
  }
  const handleReviewPress = (workshopId) => {
    navigation.navigate("Reviews", { W_id: workshopId }); // Pass W_id instead of workshopIdr
};
  return (
    <View style={styles.max}>
      <Image
        style={styles.c37cc3180d854ece42ff0d891765dbIcon}
        contentFit="cover"
        source={require("../assets/c37cc3180d854ece42ff0d891765dbaa-1.png")}
      />
      
      <Image
        style={[styles.maxChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.maxItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text
        style={[styles.forAllThe, styles.forAllTheTypo]}
      >{workshop.description}</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text1, styles.text1Clr]}>{workshop.phoneNumber}</Text>
      <Image
        style={[styles.locationSignSvgrepoCom2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/locationsignsvgrepocom-22.png")}
      />
      <Text style={[styles.xFaisalTown, styles.addReviewTypo]}>{workshop.address}</Text>
      <Pressable
        style={[styles.maxInner, styles.maxBg]}
        onPress={() => navigation.navigate("TestH")}
      />
      <Pressable
        style={styles.home}
        onPress={() =>handleReviewPress(workshop.W_id)  }
      >
        <Text style={[styles.home1, styles.textTypo]}>HOME</Text>
      </Pressable>

      <Text style={[styles.ratereviewUs, styles.addReviewTypo]}>
        Rate/Review us:
      </Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.addReview, styles.addReviewTypo]}>Add review</Text>
      <Image
        style={styles.commentsIcon}
        contentFit="cover"
        source={require("../assets/comments.png")}
      />
      <View style={[styles.maxChild1, styles.maxBg]} />
      <Pressable
        style={styles.checkOutOurContainer}
        onPress={() => handleReviewPress(workshop.W_id)}
      >
        <Text style={[styles.checkOutOurReveiws, styles.addReviewTypo]}>
          Check out our Reveiws!
        </Text>
      </Pressable>
      <Text style={[styles.maxpowerMotorsports, styles.text1Clr]}>
      {workshop.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    height: 19,
    width: 19,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  forAllTheTypo: {
    color: Color.colorDarkorange_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text1Clr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  addReviewTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  iconLayout: {
    height: 25,
    top: 768,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  maxBg: {
    backgroundColor: Color.colorDarkorange_100,
    position: "absolute",
  },
  c37cc3180d854ece42ff0d891765dbIcon: {
    top: 0,
    left: 0,
    width: 401,
    position: "absolute",
    height: 812,
  },
  wifiIcon: {
    left: 317,
    top: 8,
    width: 19,
  },
  batteryHalfIcon: {
    left: 340,
    top: 8,
    width: 19,
  },
  signalIcon: {
    top: 10,
    left: 293,
  },
  maxChild: {
    height: "24.63%",
    width: "53.33%",
    top: "-7.51%",
    right: "68%",
    bottom: "82.88%",
    left: "-21.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  maxItem: {
    top: -111,
    left: 7,
    width: 200,
    height: 200,
    position: "absolute",
  },
  text: {
    marginTop: -398,
    top: "50%",
    left: 28,
    width: 44,
    height: 31,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  forAllThe: {
    marginLeft: -177.5,
    top: 295,
    left: "50%",
    fontSize: FontSize.size_base,
    width: 351,
    height: 152,
    textAlign: "left",
  },
  vectorIcon: {
    height: "3.08%",
    width: "6.67%",
    top: "59.36%",
    right: "74.13%",
    bottom: "37.56%",
    left: "19.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  text1: {
    top: 478,
    left: 109,
    fontSize: FontSize.size_xl,
    width: 157,
    height: 23,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    textAlign: "left",
  },
  locationSignSvgrepoCom2Icon: {
    height: "3.94%",
    width: "14.4%",
    top: "65.52%",
    right: "70.4%",
    bottom: "30.54%",
    left: "15.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  xFaisalTown: {
    top: 528,
    left: 111,
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  facebookSquareIcon: {
    left: 120,
  },
  instagramIcon: {
    left: 163,
  },
  twitterIcon: {
    left: 206,
  },
  maxInner: {
    top: 45,
    width: 66,
    height: 28,
    left: 293,
  },
  home1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  home: {
    left: 305,
    top: 49,
    position: "absolute",
  },
  arrowIcon: {
    top: 59,
    left: 13,
    width: 37,
  },
  ratereviewUs: {
    top: 654,
    left: 42,
    color: Color.colorDarkorange_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleView: {
    top: 685,
    left: 39,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorGainsboro,
    width: 302,
    height: 46,
    position: "absolute",
  },
  addReview: {
    top: 694,
    left: 45,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    position: "absolute",
  },
  commentsIcon: {
    top: 596,
    left: 72,
    height: 34,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  maxChild1: {
    top: 597,
    left: 107,
    width: 224,
    height: 33,
  },
  checkOutOurReveiws: {
    width: 231,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  checkOutOurContainer: {
    top: 599,
    right: 35,
    position: "absolute",
  },
  maxpowerMotorsports: {
    top: 177,
    left: 14,
    fontSize: FontSize.size_5xl,
    fontWeight: "bold",
    fontFamily: FontFamily.purplePurseRegular,
    width: 356,
    height: 167,
    textAlign: "left",
  },
  max: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Max;
