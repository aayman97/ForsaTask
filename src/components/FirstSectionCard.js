import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MainText from "./MainText";
import { ArrowRightIcon } from "../resources/assets/SVGs";

const { width } = Dimensions.get("screen");

const FirstSectionCard = ({ item, lang }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.wrapper]}>
        <Image
          source={item.thumbnail}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <View style={[styles.logoAndTextContainer, { flexDirection: lang === "en" ? "row" : "row-reverse" }]}>
          <View style={styles.logoWrapper}>
            <Image source={item.logo} />
          </View>

          <MainText
            bold={true}
            size={16}
            style={{
              marginLeft: lang === "en" ? 10 : 0,
              marginRight: lang === "en" ? 0 : 10,
            }}
          >
            {item.description}
          </MainText>

          <View
            style={[
              styles.arrowContainer,
              {
                transform: [
                  {
                    scaleX: lang === "en" ? 1 : -1,
                  },
                ],
                marginLeft: lang === "en" ? 5 : 0,
                marginRight: lang === "en" ? 0 : 5,
              },
            ]}
          >
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
  },
  logoWrapper: {
    width: 73,
    height: 73,
    borderRadius: 73,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowContainer: { alignItems: "center", justifyContent: "center" },
});

export default FirstSectionCard;
