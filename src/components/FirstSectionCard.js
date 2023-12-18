import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MainText from "./MainText";
import { ArrowRightIcon } from "../resources/assets/SVGs";

const { width } = Dimensions.get("screen");

const FirstSectionCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <Image
          source={item.thumbnail}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <View style={styles.logoAndTextContainer}>
          <View style={styles.logoWrapper}>
            <Image source={item.logo} />
          </View>

          <MainText
            bold={true}
            size={16}
            style={{
              marginLeft: 10,
            }}
          >
            {item.description}
          </MainText>

          <View style={styles.arrowContainer}>
            <ArrowRightIcon />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 138,
    alignItems: "center",
    //   justifyContent: "center",
  },
  wrapper: {
    width: 325,
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  logoAndTextContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logoWrapper: {
    width: 73,
    height: 73,
    borderRadius: 73,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowContainer: { marginLeft: 5, alignItems: "center", justifyContent: "center" },
});

export default FirstSectionCard;
