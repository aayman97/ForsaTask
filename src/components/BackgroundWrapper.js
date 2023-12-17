import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import R from "../resources/R";
import { ThreeArrows } from "../resources/SVGs";

const { width } = Dimensions.get("screen");
const BackgroundWrapper = ({ children, top = "-35%" }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.threeArrowsContainer}>
        <ThreeArrows />
      </View>
      <View style={[styles.largeCircle, { top }]} />

      <View style={styles.childrenContainer}>{children}</View>
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
  },
});

export default BackgroundWrapper;
