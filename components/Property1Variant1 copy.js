import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant1 = ({
  polygon1,
  propTop,
  propLeft,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  propBackgroundColor2,
  propColor2,
  propBackgroundColor3,
  propColor3,
  propBackgroundColor4,
  propColor4,
  propBackgroundColor5,
  propColor5,
  propBackgroundColor6,
  propColor6,
  propBackgroundColor7,
  propColor7,
  propBackgroundColor8,
  propColor8,
}) => {
  const property1Variant11Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const fuelStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  const maintenanceStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor2),
    };
  }, [propBackgroundColor2]);

  const insuranceStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor3),
    };
  }, [propBackgroundColor3]);

  const registrationTaxesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor3),
    };
  }, [propColor3]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor4),
    };
  }, [propBackgroundColor4]);

  const parkingTollsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor4),
    };
  }, [propColor4]);

  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor5),
    };
  }, [propBackgroundColor5]);

  const repairsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor5),
    };
  }, [propColor5]);

  const frameView6Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor6),
    };
  }, [propBackgroundColor6]);

  const accessoriesModificationsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor6),
    };
  }, [propColor6]);

  const frameView7Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor7),
    };
  }, [propBackgroundColor7]);

  const carWashesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor7),
    };
  }, [propColor7]);

  const frameView8Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor8),
    };
  }, [propBackgroundColor8]);

  const leaseLoanStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor8),
    };
  }, [propColor8]);

  return (
    <View style={[styles.property1variant11, property1Variant11Style]}>
      <View style={[styles.categoryParent, styles.fuelWrapperSpaceBlock]}>
        <Text style={[styles.category, styles.fuelTypo]}>Category</Text>
        <Image style={styles.frameChild} contentFit="cover" source={polygon1} />
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameViewStyle,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, fuelStyle]}>Fuel</Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView1Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, maintenanceStyle]}>
            Maintenance
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView2Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, insuranceStyle]}>
            Insurance
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView3Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, registrationTaxesStyle]}>
            Registration / Taxes
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView4Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, parkingTollsStyle]}>
            Parking / Tolls
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView5Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, repairsStyle]}>
            Repairs
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView6Style,
          ]}
        >
          <Text
            style={[
              styles.fuel,
              styles.fuelTypo,
              accessoriesModificationsStyle,
            ]}
          >
            Accessories /Modifications
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView7Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, carWashesStyle]}>
            Car Washes
          </Text>
        </View>
        <View
          style={[
            styles.fuelWrapper,
            styles.fuelWrapperSpaceBlock,
            frameView8Style,
          ]}
        >
          <Text style={[styles.fuel, styles.fuelTypo, leaseLoanStyle]}>
            Lease / Loan Payments
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fuelWrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_8xs,
    flexDirection: "row",
  },
  fuelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  parentPosition: {
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  category: {
    color: Color.colorWhite,
    width: 88,
    height: 23,
  },
  frameChild: {
    width: 36,
    height: 27,
    marginLeft: 128,
  },
  categoryParent: {
    height: "9.48%",
    top: "0%",
    bottom: "90.52%",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  fuel: {
    color: Color.colorGainsboro,
  },
  fuelWrapper: {
    height: 51,
    width: 263,
  },
  frameParent: {
    height: "85.32%",
    top: "14.68%",
    bottom: "0%",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
    borderWidth: 3,
  },
  property1variant11: {
    top: 40,
    left: 544,
    height: 538,
    width: 263,
    position: "absolute",
  },
});

export default Property1Variant1;
