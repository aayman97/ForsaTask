import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MainText from "./MainText";
import R from "../resources/R";
import { HeartIcon } from "../resources/assets/SVGs";

const MyOffersCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.offersCard}>
      <View style={{ width: "100%", height: "50%" }}>
        <Image source={{ uri: item.brand.thumbnail ? item.brand.thumbnail : item.brand.thumbnail_web }} style={styles.imageContainer} />
        <TouchableOpacity style={styles.heartContainer}>
          <HeartIcon width={15} height={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <MainText color={R.colors.gray}>{item.brand.sector.title}</MainText>
        <MainText bold={true} size={16}>
          {item.brand.title}
        </MainText>
        <MainText size={12} color={R.colors.gray} style={{ textAlign: "center", marginTop: 10 }}>
          {item.title.replace(/\//g, "\n")}
        </MainText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  offersCard: {
    width: "95%",
    height: 230,
    borderRadius: 5,
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 6,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
    top: -20,
  },
  detailsContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowOpacity: 0.1,
    elevation: 6,
    alignItems: "center",
    padding: 10,
  },
  heartContainer: {
    width: 25,
    height: 25,
    backgroundColor: R.colors.gray,
    position: "absolute",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    right: 10,
  },
});
export default MyOffersCard;
