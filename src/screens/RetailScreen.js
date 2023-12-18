import React from "react";
import { StyleSheet, View } from "react-native";
import MainText from "../components/MainText";

const RetailScreen = () => {
  return (
    <View style={styles.container}>
      <MainText>Retail Screen</MainText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RetailScreen;
