import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import MainText from "./MainText";
import R from "../resources/R";

const BrandCard = ({ item, index }) => {
  return (
    <TouchableOpacity style={[styles.container, { marginLeft: index !== 0 ? 10 : 0, backgroundColor: "white" }]}>
      {!item.thumbnail && (
        <MainText
          style={{
            textAlign: "center",
          }}
          bold={true}
          size={12}
        >
          {item.title}
        </MainText>
      )}
      {item.thumbnail && (
        <Image
          source={{ uri: item.thumbnail }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 58,
    borderWidth: 0.5,
  },
});
export default BrandCard;
