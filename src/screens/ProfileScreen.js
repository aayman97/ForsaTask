import React from "react";
import { StyleSheet, View } from "react-native";
import MainText from "../components/MainText";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <MainText>Profile Screen</MainText>
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
export default ProfileScreen;
