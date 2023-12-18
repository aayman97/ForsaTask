import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MainText from "./MainText";
import R from "../resources/R";

const SectorCard = ({ item, index, selectedSector, setSelectedSector, setItemWidths, lang }) => {
  return (
    <TouchableOpacity
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setItemWidths((prevWidths) => [...prevWidths, width]);
      }}
      style={[styles.container, { marginLeft: index !== 0 ? 5 : 0, backgroundColor: selectedSector === index ? R.colors.lightGreen : "transparent" }]}
      onPress={() => {
        setSelectedSector(index);
      }}
    >
      <MainText color={selectedSector === index ? "white" : "black"}>{item.label}</MainText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 5,
  },
});
export default SectorCard;
