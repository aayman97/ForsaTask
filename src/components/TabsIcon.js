import React from "react";
import { StyleSheet, View } from "react-native";
import MainText from "./MainText";
import R from "../resources/R";

const TabsIcon = ({ activeIcon, inActiveIcon, focused, label }) => {
  return (
    <View style={styles.container}>
      {focused ? activeIcon : inActiveIcon}
      <MainText
        size={11}
        color={focused ? R.colors.navyBlue : R.colors.gray}
        fontWeight={400}
        style={{
          width: "90%",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {label}
      </MainText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: 20,
    // backgroundColor: "red",
  },
});
export default TabsIcon;
