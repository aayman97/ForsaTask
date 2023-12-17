import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { HeartIcon, LogoIcon, RingIcon, SearchIcon } from "../resources/SVGs";
import R from "../resources/R";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 50,
        }}
      >
        <SearchIcon width={20.5} height={20.5} />
      </TouchableOpacity>

      <View>
        <LogoIcon width={35.57} height={62.38} />
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <HeartIcon width={25.82} height={22.97} />
        </TouchableOpacity>

        <TouchableOpacity>
          <RingIcon width={22.68} height={23} />
          <View style={styles.notificationPoint} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    flexDirection: "row",
    gap: 10,
  },
  notificationPoint: {
    width: 10,
    height: 10,
    backgroundColor: R.colors.lightGreen,
    position: "absolute",
    right: 0,
    borderRadius: 10,
  },
});
export default Header;