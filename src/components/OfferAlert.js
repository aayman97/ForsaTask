import React from "react";
import { StyleSheet, View } from "react-native";
import R from "../resources/R";
import { WritingIcon } from "../resources/assets/SVGs";
import MainText from "./MainText";

const OfferAlert = () => {
  return (
    <View style={styles.container}>
      <WritingIcon />
      <View
        style={{
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <MainText color={R.colors.gold} size={16} fontWeight={400} bold={true}>
          Get your limit
        </MainText>
        <MainText color={R.colors.gold} size={12} fontWeight={400} bold={false}>
          Complete your infoand get up to EGP 100,000
        </MainText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: R.colors.gold,
    borderRadius: 10,
    marginTop: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});

export default React.memo(OfferAlert);
