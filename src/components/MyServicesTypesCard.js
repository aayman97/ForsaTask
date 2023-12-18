import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainText from "./MainText";

const gradientList = [
  ["#320E3D", "#107989"],
  ["#00AED6", "#00ADD4", "#0088B4"],
  ["#12252D", "#294E5D"],
  ["#12252D", "#203B44", "#294E5D"],
];

const MyServicesTypesCard = ({ item, index, length }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={gradientList[index % gradientList.length]}
        style={styles.container}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
      >
        <MainText color={"white"}>{item.name}</MainText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default React.memo(MyServicesTypesCard);
