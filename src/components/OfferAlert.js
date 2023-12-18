import React from "react";
import { StyleSheet, View } from "react-native";
import R from "../resources/R";
import { WritingIcon } from "../resources/assets/SVGs";
import MainText from "./MainText";
import { strings } from "../localization";

const OfferAlert = ({ lang }) => {
  return (
    <View style={[styles.container, { flexDirection: lang === "en" ? "row" : "row-reverse" }]}>
      <WritingIcon />
      <View
        style={{
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <MainText color={R.colors.gold} size={16} fontWeight={400} bold={true}>
          {strings[lang].all.Getyourlimit}
        </MainText>
        <MainText color={R.colors.gold} size={12} fontWeight={400} bold={false}>
          {strings[lang].all.CompleteInfo}
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

    gap: 10,
  },
});

export default React.memo(OfferAlert);
