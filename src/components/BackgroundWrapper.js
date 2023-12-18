import React from "react";
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import R from "../resources/R";
import { ThreeArrows } from "../resources/assets/SVGs";

const { width } = Dimensions.get("screen");
const BackgroundWrapper = ({ children, top = "-35%" }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" && 40 }}>
      <View style={styles.threeArrowsContainer}>
        <ThreeArrows />
      </View>
      <View style={[styles.largeCircle, { top }]} />

      <View style={styles.childrenContainer}>
        <ScrollView>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  largeCircle: {
    width: width,
    height: 400,
    backgroundColor: R.colors.navyBlue,
    borderRadius: width / 2,
    position: "absolute",

    left: 0,
    transform: [
      {
        scale: 1.9,
      },
      {
        scaleX: 1.2,
      },
    ],
  },
  threeArrowsContainer: {
    position: "absolute",
    top: "40%",
    alignSelf: "center",
  },

  childrenContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    zIndex: 100,
  },
});

export default BackgroundWrapper;
